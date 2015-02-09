$(document).ready(function() {
  $.get('https://api.github.com/users/guspowell', function(user) {
    var newProfile = Mustache.render($('#profile-template').html(), user);
    $('.profile-container').append(newProfile);
  });
});

// $(document).ready(function() {
//   $.get('http://localhost:3000/users/guspowell', function(user) {
//     var newProfile = Mustache.render($('#profile-template').html(), user);
//     $('.profile-container').append(newProfile);
//   });
// });
