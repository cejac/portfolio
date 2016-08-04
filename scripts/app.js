function Project(opts){
  this.title = opts.title;
  this.url = opts.url;
  this.published = opts.published;
  this.about = opts.about;
}

Project.all = [];

Project.prototype.toHtml = function(){
  var templateScript = $('#project-template').html();
  var template = Handlebars.compile(templateScript);

  this.daysAgo = parseInt((new Date() - new Date(this.published))/60/60/24/1000);
  this.publishStatus = this.published ? 'published ' + this.daysAgo + ' days ago' : '(draft)';

  var compileTemplate = template(this);

  return compileTemplate;
};

Project.loadAll = function(data){
  data.sort(function(a,b) {
    return (new Date(b.published)) - (new Date(a.published));
  });

  data.forEach(function(obj) {
    Project.all.push(new Project(obj));
  });
};

Project.getAll = function(){
  if (localStorage.data){
    Project.loadAll(JSON.parse(localStorage.getItem('data')));
    projectView.initPage();
  } else {
    $.getJSON('scripts/projects.json', function(data){
      Project.loadAll(data);
      localStorage.setItem('data', JSON.stringify(data));
    });
    projectView.initPage();
  }
};
