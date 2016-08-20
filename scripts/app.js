(function(module){
  function Project(opts){
    this.title = opts.title;
    this.url = opts.url;
    this.published = opts.published;
    this.about = opts.about;
  }

  Project.all = [];

  Project.prototype.toHtml = function(){
    var templateScript = Handlebars.compile($('#project-template').html());

    this.daysAgo = parseInt((new Date() - new Date(this.published))/60/60/24/1000);
    this.publishStatus = this.published ? 'published ' + this.daysAgo + ' days ago' : '(draft)';

    return templateScript(this);
  };

  Project.loadAll = function(data){
    data.sort(function(a,b) {
      return (new Date(b.published)) - (new Date(a.published));
    });

    data.forEach(function(obj) {
      Project.all.push(new Project(obj));
    });
  };

  Project.getAll = function(callback){
    if (localStorage.data){
      Project.loadAll(JSON.parse(localStorage.getItem('data')));
      callback();
    } else {
      $.getJSON('scripts/projects.json', function(data){
        Project.loadAll(data);
        localStorage.setItem('data', JSON.stringify(data));
        callback();
      });
    }
  };

  Project.allProjects = function() {
    return Project.all.map(function(project){
      return project.title;
    })
  .filter(function(title, index, arr){
    return arr.indexOf(title) === index;
  });
  };

  Project.wordsPerProject = function() {
    return Project.allProjects().map(function(title) {
      return {
        name: title,
        numWords: Project.all.reduce(function(a, b){
          if(b.title === title){
            a.push(b.about.split(' ').length);
          }
          return a;
        }, [])
            .reduce(function(a, b) {

              return a + b;
            })
      };
    });
  };

  module.Project = Project;
})(window);
