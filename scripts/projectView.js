var projectView = {};

projectView.navHandler = function(){
  $('#mainNav').on('click', '.navSelect', function(){
    var $navSelect = $(this).data('content');
    $('.tab-content').hide();
    $('#' + $navSelect).show();
  });
};

projectView.menuToggle = function(){
  $('#toggleNav').on('click', function(){
    $('.navSelect').toggle();
  });
  $(window).on('resize', function() {
    if ($(window).width() >= 414) {
      $('.navSelect').show().css({'display': 'inline'});
    } else if ($(window).width() <= 414) {
      $('.navSelect').hide().css({'display': 'flex', 'flex-direction': 'row'});
    } else {
      $('.navSelect').hide();
    }
  });
};

$(function(){
  projectView.navHandler();
  projectView.menuToggle();
});
