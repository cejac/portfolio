var projectView = {};

projectView.filter = function(){
  $('article').each(function(){
    var val = $(this).find('h2 a').text();
    console.log('hi');
    var optionTag = '<option value="' + val + '">' + val + '</option>';
    $('#project-filter').append(optionTag);
  });
};

projectView.filterHandler = function(){
  $('#project-filter').on('change', function(){
    if($(this).val()){
      $('article').hide();
      $('#about').hide();
      $('article[data-project="' + $(this).val() + '"]').fadeIn('slow');
    } else {
      $('article').fadeIn();
      $('article.template').hide();
    }
  });
};

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
    if ($(window).width() >= 600) {
      $('.navSelect').show().css({'display': 'inline'});
    } else if ($(window).width() <= 599) {
      $('.navSelect').hide().css({'display': 'flex', 'flex-direction': 'row', 'justify-content': 'center'});
    } else {
      $('.navSelect').hide();
    }
  });
};

$(function(){
  projectView.filter();
  projectView.filterHandler();
  projectView.navHandler();
  projectView.menuToggle();
});
