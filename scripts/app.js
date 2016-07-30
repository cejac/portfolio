var projects = [];

function Project(opts){
  this.title = opts.title;
  this.url = opts.url;
  this.published = opts.published;
  this.about = opts.about;
}

Project.prototype.toHTML = function(){
  var templateScript = $('#project-template').html();
  var template = Handlebars.compile(templateScript);

  this.daysAgo = parseInt((new Date() - new Date(this.published))/60/60/24/1000);
  this.publishStatus = this.published ? 'published ' + this.daysAgo + ' days ago' : '(draft)';

  var compileTemplate = template(this);

  return compileTemplate;
};

data.sort(function(a,b) {
  return (new Date(b.published)) - (new Date(a.published));
});

data.forEach(function(opts) {
  projects.push(new Project(opts));
});

projects.forEach(function(a){
  $('#project-section').append(a.toHTML());
});
