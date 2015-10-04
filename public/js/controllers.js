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
      version: '0.4.1-1',
      md5: {
        'i386.rpm': '1eea52b2230f250d1126be1d188a1ca6',
        'x86_64.rpm': 'b6ec77c510f38f7c304c13946565d6c3',
        'i386.deb': '6393a772d4975074d18bea5f2a3b1bf0',
        'amd64.deb': '6ae09e3941047d0ca4d0bb6b53967574'
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
    },
    {
      version: '0.7.0-1',
      md5: {
        'i386.rpm': 'a78d6c0ed807b9a2278721eb230c8d75',
        'x86_64.rpm': '2a659ac9666fe8534842eaa0c843ad25',
        'i386.deb': '69a1f089c8dc6f784ff9a86f11128f09',
        'amd64.deb': '07c9d0a73d69227815d1c7ecacac82e3'
      }
    },
    {
      version: '0.7.1-1',
      md5: {
        'i386.rpm': 'c5ab39f111d2fb3ccf04d0e9eb06090d',
        'x86_64.rpm': 'f95582a4c1d5a75334a7bff0d0541263',
        'i386.deb': '45c25689bdcca10f997e0dfbd1a1944d',
        'amd64.deb': 'd4b6c870c098ec6834dc623e85f1d4ab'
      }
    },
    {
      version: '0.8.1-1',
      md5: {
        'i386.rpm': 'e8d94d5e1c87b6e7130f518e15690503',
        'x86_64.rpm': 'fbde6f4210ee8de2708b8e02e8d3ec39',
        'i386.deb': '254c6384615ca23a3f168d0cc131fbd6',
        'amd64.deb': '0944e73f1d996be88f1681f817fc35d8'
      }
    },
    {
      version: '0.9.0-1',
      md5: {
        'i386.rpm': '8c8268e8cb516fc6582c92df0371006d',
        'x86_64.rpm': 'da27ad04c7efc63b87a4dc448d30a531',
        'i386.deb': 'b417bcf739f0f88e7e9d5cda373a0145',
        'amd64.deb': 'ed34d86d722c799ef30f245d0b38a60d'
      }
    },
    {
      version: '0.9.1-1',
      md5: {
        'i386.rpm': 'c9d68b79761352119f246623e813cc66',
        'x86_64.rpm': 'f1044cbb5aacae3e4b155edda2679730',
        'i386.deb': '54836dc74d26a665d3a2bc8fbc095fe8',
        'amd64.deb': '2ab26090c1dbb39874459ab84aba51e4'
      }
    },
    {
      version: '0.10.0-1',
      md5: {
        'i386.rpm': '20f28c2ec0e57a6addedcf927205742f',
        'x86_64.rpm': '07864543f8d1ff66add86395c3325676',
        'i386.deb': '5c9434271b167757aa00eb8cdb3c425f',
        'amd64.deb': 'cd161406bfb55d13ecc78bf650f4ffbc'
      }
    },
    {
      version: '0.10.1-1',
      md5: {
        'i386.rpm': 'c2b28d882284a10df8f024806757b2ad',
        'x86_64.rpm': '89ee32655ce1bb98bf9acbf313c06bc7',
        'i386.deb': 'a1b8166ed76f533b56ca82e1568066df',
        'amd64.deb': 'bc072d397fcd5b18ae3aa4fae582fd84'
      }
    },
    {
      version: '0.10.2-1',
      md5: {
        'i386.rpm': 'c65a964e62b0b22b12235e340cb72099',
        'x86_64.rpm': '45d70a01c68244c934c9124f98dc7ad9',
        'i386.deb': 'd179b24ddea683f4f23c43560ff6f9a5',
        'amd64.deb': 'ea86a8705d8afca7798be9884e59e421'
      }
    },
    {
      version: '0.10.3-1',
      md5: {
        'i386.rpm': '72e03cdfc6a654848e3d072b3a6518f3',
        'x86_64.rpm': '97a04d0792f2e1af740e998bc1524d71',
        'i386.deb': '712f99f5d6f568cc54c46f8e7f76445c',
        'amd64.deb': '21aed1ada728f5f4db64340e6b06f79e'
      }
    },
    {
      version: '0.10.4-1',
      md5: {
        'i386.rpm': '0208f9bcceb5384cb24a7d63273fd582',
        'x86_64.rpm': '2766a1d6f6c2c8e64cc97fb91f46c284',
        'i386.deb': 'd0446833ad41059e3108ce78f0a047f4',
        'amd64.deb': '51c67bf7998bb270bc93cea8ba48485e'
      }
    },
    {
      version: '0.11.0-1',
      md5: {
        'i386.rpm': '8a69b7605d1365981b164f5ac4aebdf1',
        'x86_64.rpm': 'f096e8adbb2c477bf0c8469ae04bb2bf',
        'i386.deb': '65bffb7e25e8381a37bf565388d8bb9c',
        'amd64.deb': 'b6d1030e18ce6359b456b7162eb41b80'
      }
    },
    {
      version: '0.11.1-1',
      md5: {
        'i386.rpm': 'c61bd352e7886dd6c90292915a103aa3',
        'x86_64.rpm': 'cad8142eaa079670907bd4f842cedb84',
        'i386.deb': 'e72d22c8dbe6a1c2d749775c347f6dbf',
        'amd64.deb': '4dd3302451c606e7dce89606c3e70495'
      }
    },
    {
      version: '0.11.2-1',
      md5: {
        'i386.rpm': '8451ad22ebb117ab89b9182b69ef64ea',
        'x86_64.rpm': '4af9d98c0c04f083513935e5f9c16f72',
        'i386.deb': 'c7f48a4180d51f9caa9725d80dc7678b',
        'amd64.deb': 'b1dd48173f6f89798207df9d9928d62f'
      }
    }
  ];
  var i = ($scope.downloads.length) - 1;
  $scope.latest = $scope.downloads[i]
}]);

controllerModule.controller('support', ['$scope', function ($scope) {
  $scope.email = 'hello@uchiwa.io';
}]);
