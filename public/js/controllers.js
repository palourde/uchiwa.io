'use strict';
var controllerModule = angular.module('uchiwa-io.controllers', []);

controllerModule.controller('mainCtrl', function () {
});

controllerModule.controller('download', ['$scope', function ($scope) {
  $scope.downloads = [
    {
      version: '0.3.0',
      md5: {
        'i386.rpm': '688f98f7232f2e77e958a65fce81880b',
        'x86_64.rpm': 'e4e6a0e59453f460d3510e78bf26e0d5',
        'i386.deb': 'c939a2fdea89f871e85cc09db7e38dcd',
        'amd64.deb': 'd1dc65da40e581b5efc1d854920bf4ea'
      }
    },
    {
      version: '0.3.1',
      md5: {
        'i386.rpm': '63a49a743e9b3a1b705e6a32656ee823',
        'x86_64.rpm': 'cffc647bcbd511d1cdb01bbfea2ff19d',
        'i386.deb': '21ae5fc085e1904fd124ff0eb7ce6576',
        'amd64.deb': 'c2bd70579ced28073b1c53a1a5eae295'
      }
    },
    {
      version: '0.3.2',
      md5: {
        'i386.rpm': '4acebc720b7dd9ea8eaebef5d52e72e5',
        'x86_64.rpm': '6c2bfa40844b351fb2497c18763f0b9b',
        'i386.deb': '6b26bdb41a90c3e17687bfa096479143',
        'amd64.deb': '6963d3e1293e8410d1f0a71485cec359'
      }
    }
  ];
  var i = ($scope.downloads.length) - 1;
  $scope.latest = $scope.downloads[i]
}]);

controllerModule.controller('support', ['$scope', function ($scope) {
  $scope.email = 'hello@uchiwa.io';
}]);
