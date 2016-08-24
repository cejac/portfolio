(function(module){
  var repo = {};

  repo.all = [];

  repo.requestAllRepos = function(call) {
    $.ajax({
      url: 'https://api.github.com/user/repos?sort=updated&per_page=10',
      type: 'GET',
      headers: {
        Authorization: 'token ' + githubToken
      }
    }).done(function(data){
      console.log(data);
      repo.all = data;
    });
    call();
  };

  module.repo = repo;
})(window);
