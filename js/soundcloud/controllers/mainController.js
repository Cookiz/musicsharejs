app.controller("mainController", function($scope, $http){
  $scope.apiKey = "be88ad87cb242d2e88d6573c08278cb2";
  $scope.resultPlaylistsAndTracks = [];
  $scope.init = function() {

    // initialize client with app credentials
    /*SC.initialize({
      client_id: $scope.apiKey,
      redirect_uri: 'http://musicshare.dev/js/soundcloud/callback.html'
    });

    // initiate auth popup
    SC.connect(function() {
      SC.get('/me', function(me) {
      });
    });*/

    var userid = "33968042";

    $http({method: 'GET', url: 'http://api.soundcloud.com/users/' + userid + '/playlists?client_id=' + $scope.apiKey}).
        success(function(data, status, headers, config) {

          angular.forEach(data, function(value, index) {
            if (value.kind === 'playlist') {
              $scope.resultPlaylistsAndTracks.push(value);
            }
          })

        }).
        error(function(data, status, headers, config) {

        });
  };

});

