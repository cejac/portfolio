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

projectView.refresh = function(){
  $('#mainNav').on('click', '.icon-home', function(){
    $('article').show();
    $('#project-filter').val('');
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
      $('.navSelect').css({'display': 'flex', 'flex-direction': 'row', 'justify-content': 'center'}).hide();
    } else {
      $('.navSelect').hide();
    }
  });
};

projectView.initPage = function(){
  Project.all.forEach(function(a){
    $('#project-section').append(a.toHtml());
  });

  projectView.filter();
  projectView.filterHandler();
  projectView.navHandler();
  projectView.refresh();
  projectView.menuToggle();
};

// projectView.initNewArticlePage = function(){
//   $('.tab-content').show(); //section we are tageting has a class of tab-content
//   $('#article-export').hide();
//   $('#article-json').on('focus', function(){
//     this.select(); //gives us automatic highlighting behavior
//   });
//   $('#new-form').on('change', 'inputs, textarea', projectView.create());
// };
//
// projectView.create = function(){
//   var $newProject;
//   $('$article-preview').empty();
//   var obj = { //grabbed everytning from our constructor and made it into a literal
//     title: $('project-title').val(), //grabbing the selector from the dom and getting it's value
//     url: $('project-author-url').val(),
//     about: $('project-about').val(),
//     // published: $('project-published:checked').length //returns an array of either 1(checked) or 0(not checked). We need to to turn this into true of false for the check box. Make into turnary function
//     published: $('project-published:checked').length ? new Date() : null
//   };
//   $newProject = new Project(opts); //should return a finished article object we can pass to handlebars in order to create a preview and render to the page
//   $('project-preview').append($newArticle.toHTML());
//
//   $('pre code').each(function(i, block) {
//     hljs.hightlightBlock(block);
//   });
//
//   $('#article-export').show();
//
//   $('#project-json').val(JSON.stringify(($newProject) + ', '));
//
//   //if you call things without () you set things, if you put arguments () you get it
// };
