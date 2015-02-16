'use strict';

angular.module('angularFullstackApp').
  config(function ($routeProvider) {
    $routeProvider.when('/scrolly', {
      templateUrl: 'app/scrolly/scrolly.html',
      controller: 'ScrollyCtrl'
    });
  }).
  run(function($rootScope) {
    $rootScope.log = function(msg) { console.log(msg); }
  }).
  controller('ScrollyCtrl', ['$scope', '$log', function($scope, $log) {
    $log.log('hello, logger!@');
  }]);
