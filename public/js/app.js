'use strict';

angular.module('uchiwa-io', [
  'uchiwa-io.controllers',
  'ngRoute'
]);

angular.module('uchiwa-io').config(['$routeProvider',
  function ($routeProvider) {
    $routeProvider
      .when('/', {templateUrl: 'partials/main.html', controller: 'index'})
      .when('/download', {templateUrl: 'partials/download.html'})
      .otherwise('/');
  }]);
