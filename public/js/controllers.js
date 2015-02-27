'use strict';
var controllerModule = angular.module('uchiwa-io.controllers', []);

controllerModule.controller('mainCtrl', function () {
});

controllerModule.controller('download', ['$scope', function ($scope) {
  $scope.downloads = [
    {
      version: '0.3.0-1',
      md5: {
        'i386.rpm': '688f98f7232f2e77e958a65fce81880b',
        'x86_64.rpm': 'e4e6a0e59453f460d3510e78bf26e0d5',
        'i386.deb': 'c939a2fdea89f871e85cc09db7e38dcd',
        'amd64.deb': 'd1dc65da40e581b5efc1d854920bf4ea'
      }
    },
    {
      version: '0.3.1-1',
      md5: {
        'i386.rpm': '63a49a743e9b3a1b705e6a32656ee823',
        'x86_64.rpm': 'cffc647bcbd511d1cdb01bbfea2ff19d',
        'i386.deb': '21ae5fc085e1904fd124ff0eb7ce6576',
        'amd64.deb': 'c2bd70579ced28073b1c53a1a5eae295'
      }
    },
    {
      version: '0.3.2-1',
      md5: {
        'i386.rpm': '4acebc720b7dd9ea8eaebef5d52e72e5',
        'x86_64.rpm': '6c2bfa40844b351fb2497c18763f0b9b',
        'i386.deb': '6b26bdb41a90c3e17687bfa096479143',
        'amd64.deb': '6963d3e1293e8410d1f0a71485cec359'
      }
    },
    {
      version: '0.3.3-1',
      md5: {
        'i386.rpm': '468b6a4f95bc8f6fd0af7fa3a8e925b1',
        'x86_64.rpm': '9415a52d5f1a1b056062f8eb276d3430',
        'i386.deb': 'efa9e8b261c1c1ed1028024457465035',
        'amd64.deb': '1d42f724e50ff85924f64907fe0318d4'
      }
    },
    {
      version: '0.3.4-1',
      md5: {
        'i386.rpm': '5956f23a9954688bf292114d46b0b74e',
        'x86_64.rpm': '5fe85054045770fdcda6e0e9cbf6e12f',
        'i386.deb': '49304fef72829a75b1d7808ba3ee88d2',
        'amd64.deb': 'eab9dca09491597665cd4e6fb9c3cfda'
      }
    },
    {
      version: '0.4.0-1',
      md5: {
        'i386.rpm': 'b405082c8f53dfc170fffb422e9282a8',
        'x86_64.rpm': 'ba763e9f80966d5f4005fa54e90a83fd',
        'i386.deb': '9adfc687366445b2f29d6af72d31bb10',
        'amd64.deb': 'fda4a0aae889891c64f45955b6ae9df4'
      }
    },
    {
      version: '0.5.1-1',
      md5: {
        'i386.rpm': '2afc460754ae6f7e6d705106c02be9ef',
        'x86_64.rpm': 'ff85e2b22c86a013054968df4def106b',
        'i386.deb': '0f9aeb7c6a606a462a53953e1d0441ef',
        'amd64.deb': '8732fa86462c85d9b0aab11756778ab7'
      }
    },
    {
      version: '0.6.0-1',
      md5: {
        'i386.rpm': '3f191ea92248d61d3802946a4b8c5d4c',
        'x86_64.rpm': 'bd97e1196e7815fee4e07ca43b779f13',
        'i386.deb': '5bef884e1e95de090d746c0b671c4f45',
        'amd64.deb': '9eedb369fe7feb1e7cf23060a4cc8b40'
      }
    }
  ];
  var i = ($scope.downloads.length) - 1;
  $scope.latest = $scope.downloads[i]
}]);

controllerModule.controller('support', ['$scope', function ($scope) {
  $scope.email = 'hello@uchiwa.io';
}]);
