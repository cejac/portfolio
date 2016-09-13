(function(module){
  var repoController = {};
  repoController.index = function(){
    $('.tab-content').hide();
    $('#gitWork').show();
    repo.requestAllRepos(repoView.index);
  };
  module.repoController = repoController;
})(window);
