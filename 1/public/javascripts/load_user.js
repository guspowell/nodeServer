$(document).ready(function() {
  $.get('https://api.github.com/users/guspowell', function(user) {
    var newProfile = Mustache.render($('#profile-template').html(), user);
    $('.profile-container').append(newProfile);
  });
});
