(function(module){
  var repoView = {};

  var ui = function () {
    var $gitWork = $('#gitWork');

    $gitWork.find('ul').empty();
    $gitWork.show().siblings().hide();
  };

  var render = Handlebars.compile($('#repo-template').html());

  repoView.index = function(){
    ui();
    $('#gitWork ul').append(
      repo.all.map(render)
    );
  };

  module.repoView = repoView;
})(window);
