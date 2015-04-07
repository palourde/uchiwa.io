'use strict';

angular.module('uchiwa-io', [
  'uchiwa-io.controllers',
  'ngRoute'
]);

angular.module('uchiwa-io').config(['$routeProvider',
  function ($routeProvider) {
    $routeProvider
      .when('/', {templateUrl: 'partials/main.html'})
      .when('/download', {templateUrl: 'partials/download.html', controller: 'download'})
      .when('/features', {templateUrl: 'partials/features.html'})
      .when('/support', {templateUrl: 'partials/support.html', controller: 'support'})
      .otherwise('/');
  }]);
