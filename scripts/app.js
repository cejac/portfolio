var projects = [];

function Project(opts){
  this.title = opts.title;
  this.url = opts.url;
  this.published = opts.published;
  this.about = opts.about;
}

Project.prototype.toHTML = function(){
  var $newProject = $('article.template').clone();

  $newProject.attr('data-project', this.title);
  $newProject.find('a').text(this.title);
  $newProject.find('a').prop('href', this.url);
  $newProject.attr('pubdate', this.published);
  $newProject.find('section.aboutProj').append(this.about);
  $newProject.find('time[pubdate]').attr('title', this.published);
  $newProject.find('time').html('about ' + parseInt((new Date() - new Date(this.published))/60/60/24/1000) + ' days ago');


  $newProject.removeClass('template');

  return $newProject;
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
