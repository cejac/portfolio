var projectView = {};

projectView.navHandler = function(){
  $('#mainNav').on('click', '.navSelect', function(){
    var $navSelect = $(this).data('content');
    $('.tab-content').hide();
    $('#' + $navSelect).show();
  });
};

$(function(){
  projectView.navHandler();
})
