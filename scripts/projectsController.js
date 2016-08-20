(function(module){

  var projectController = {};
  console.log('yo')
  Project.getAll(projectView.initPage);
  console.log('sup');

  projectController.index = function(){
    console.log('hi');
    $('.tab-content').hide();
    $('#project-section').show();
  };

  module.projectController = projectController;
})(window);
