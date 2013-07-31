var app = angular.module("applogin", []).config(function($routeProvider) {
  $routeProvider.when('/login', {
    templateUrl: 'login.html',
    controller: 'LoginController'
  });

  $routeProvider.when('/home', {
    templateUrl: 'home.html',
    controller: 'HomeController'
  });


  $routeProvider.otherwise({ redirectTo: '/login' });
});


app.factory("AuthenticationService", function($location) {
  return {
    login: function(credentials) {
      if (credentials.username === "user") {
        $location.path('/home');
      }
    },
    logout: function() {
      $location.path('/login');
    }
  }
});

app.controller('LoginController', function($scope, AuthenticationService) {
  $scope.credentials = { username: "", password: "" };

  $scope.login = function() {
    AuthenticationService.login($scope.credentials);
  };
});

app.controller('HomeController', function($scope, AuthenticationService) {
  $scope.logout = function() {
    AuthenticationService.logout();
  };
});

app.directive('shows', function() {
  return {
    restrict: "A", // A = Attribute, C = Class Name, E = Element, M = HTML Comment
    link: function(scope, element, attributes) {

    }
  };
});
