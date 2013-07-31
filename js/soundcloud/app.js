var app = angular.module('soundcloudApp',[]);


app.config(function($httpProvider){
  delete $httpProvider.defaults.headers.common['X-Requested-With'];
});
