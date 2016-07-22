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
    },
    {
      version: '0.12.0-1',
      md5: {
        'i386.rpm': '53037d1352ca0c7d86dcdeb10b4d7d71',
        'x86_64.rpm': 'c6ac5f3139b814010ac859fd55c43c30',
        'i386.deb': '01536379a1ae2f7efc308499d764888b',
        'amd64.deb': 'fa55195efec9d34052f9c1a93a664168'
      }
    },
    {
      version: '0.12.1-1',
      md5: {
        'i386.rpm': '8f5daa2445ac528bfb1ecd0b9f1f545c',
        'x86_64.rpm': '43e5123d82ee5e4a183c632518363f87',
        'i386.deb': '9c09168ca40b9338a640b1d02eff167b',
        'amd64.deb': 'e8f2c4f12cf47e4e587947a2535c2458'
      }
    },
    {
      version: '0.13.0-1',
      md5: {
        'i386.rpm': '9d199079943ee6bb29f95385fcade2a7',
        'x86_64.rpm': '75ec23db886b55fdc3a2d792adba8157',
        'i386.deb': 'a4fe0cac97609c98a1b954fe08abf359',
        'amd64.deb': 'a41259ad866ab389db84cbb0d4461570'
      }
    },
    {
      version: '0.14.0-1',
      md5: {
        'i386.rpm': 'ca8b16d4d27a638c69f4d965c8c815a9',
        'x86_64.rpm': '0588e7800fd18a536e4f43bc65009f52',
        'amd64.deb': 'b9d073c23b96e565ed9492e1d4cfc41e',
        'i386.deb': 'e93983980de9b1de832ab6916750046d'
      }
    },
    {
      version: '0.14.1-1',
      md5: {
        'i386.rpm': '9aeb1bd7290aea501ea06d551647ac36',
        'x86_64.rpm': '1ab6a548cadcfde23c50f5daf03456ff',
        'amd64.deb': '2615547a4df317a5025c9f0d398cbdc5',
        'i386.deb': '5d2e6a3a1222caf346fe7cb7609cf839'
      }
    },
    {
      version: '0.14.2-1',
      md5: {
        'i386.rpm': '3c2edc4d48bba27e65d18efeeac5ca41',
        'x86_64.rpm': 'fd4a2c15058101d4a79fbf5633497b2a',
        'amd64.deb': '145852927ddd0575eb6d2f1a2d1d27d0',
        'i386.deb': '07cfcff86834f2c7b0a463012deb69c7'
      }
    },
    {
      version: '0.14.3-1',
      md5: {
        'i386.rpm': '365118bdf0a0ee2c282302101965b1ce',
        'x86_64.rpm': '7546412a24cc4162ac25d26726e0b504',
        'amd64.deb': 'ff2c0b34e43e6259df40b6c75ba88154',
        'i386.deb': '718413867bc9c4c15121704de4508c6c'
      }
    },
    {
      version: '0.14.4-1',
      md5: {
        'i386.rpm': '8d071de829a83a3f4a7a81a49f686091',
        'x86_64.rpm': '0ed62aa64d7aeadd065f62b704936897',
        'amd64.deb': 'f7245ef2928f4603bdaee732368e8683',
        'i386.deb': 'ca9c8abc22ffd216423061d0dfc7d634'
      }
    },
    {
      version: '0.14.5-1',
      md5: {
        'i386.rpm': '2c58b32cf269e0244b7087a3e59df957',
        'x86_64.rpm': '4e0d5c14c4ace11440755d27b74e941e',
        'amd64.deb': 'a667667aa0b26afaa794c5287f014c7d',
        'i386.deb': '2cae103399dfdee1ba5f0660be192d65'
      }
    },
    {
      version: '0.15.0-1',
      md5: {
        'i386.rpm': '83dc03f10a2927b7e4e695df26c5d748',
        'x86_64.rpm': 'eb97c618fab67dffa1c6b4bc05decd1f',
        'amd64.deb': 'b8f255208fff3707b8337adb32d1fa8e',
        'i386.deb': '3e2ab427b5acf92ba98c7cc222d9d84b'
      }
    },
    {
      version: '0.16.0-1',
      md5: {
        'i386.rpm': '3e091b1ead5fe4d99d67ef4637bc04e1',
        'x86_64.rpm': 'ac82dfc28678178b85c97404371b8861',
        'amd64.deb': 'c44c839096b8787679f9f291e29edb76',
        'i386.deb': '22c07d38d27abf3939e5cba308bd9aa9'
      }
    },
    {
      version: '0.17.0-1',
      md5: {
        'i386.rpm': 'b2917bcfa9a68c9ea1d07c1802efabf3',
        'x86_64.rpm': '893c9aa5cb21a1c09edd6eeb9c261637',
        'amd64.deb': '2370172369f75b8b2188d5546d24ed8d',
        'i386.deb': 'cf7e47afff60b62813e32b8b8882b0c7'
      }
    }
  ];
  var i = ($scope.downloads.length) - 1;
  $scope.latest = $scope.downloads[i]
}]);

controllerModule.controller('support', ['$scope', function ($scope) {
  $scope.email = 'hello@uchiwa.io';
}]);
