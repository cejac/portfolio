(function(module){

  var projectController = {};
  console.log('yo')
  Project.getAll(projectView.initPage);
  console.log('sup');

  projectController.index = function(ctx, next){
    //projectView.index goes here. Need to make.


    console.log('hi');
    $('.tab-content').hide();
    $('#project-section').show();
  };

  articlesController.loadByTitle = function(ctx, next) {
    //

  };

  articlesController.loadAll = function(ctx, next) {
    //
  };

  //need to figure out how this goes with routes, etc.
  
  module.projectController = projectController;
})(window);
