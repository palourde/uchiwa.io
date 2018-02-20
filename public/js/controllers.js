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
    },
    {
      version: '0.17.1-1',
      md5: {
        'i386.rpm': '1f55a905aedc5a859a687ecc8a7b7289',
        'x86_64.rpm': 'e1af879d8a7e53a8905a2585d2485f9b',
        'amd64.deb': 'ecd9b2e97bcae1b47d16f72572b3724e',
        'i386.deb': 'f06ff3c209125ce4aceb9816eb81d45e'
      }
    },
    {
      version: '0.18.0-1',
      md5: {
        'i386.rpm': 'd72ae6e8452c5a043f65035581f1b461',
        'x86_64.rpm': '25ad857415a47e07679a19d2ef257fd5',
        'amd64.deb': '410d8692bdeae3e450aa005f186ebe12',
        'i386.deb': 'cf4173ec533a986df8b39e568f2fa185'
      }
    },
    {
      version: '0.18.1-1',
      md5: {
        'i386.rpm': 'b9565b0927dd0d041445f0f1e02e4acf',
        'x86_64.rpm': 'cba07153f1265472ef1f100fd160dc48',
        'amd64.deb': '3a5554f5dde34168327a486a027c982d',
        'i386.deb': '80db1071ae3b99626d504339c4964d42'
      }
    },
    {
      version: '0.18.2-1',
      md5: {
        'i386.rpm': 'e92a6e0d543d722137b52485a90e5220',
        'x86_64.rpm': '123691c9f09c63196e00e82b5c082b60',
        'amd64.deb': 'b66e0375e52ff7627fbb6d92e9508923',
        'i386.deb': '74f1df6efa5e43aeb896dff775350d80'
      }
    },
    {
      version: '0.19.0-1',
      md5: {
        'i386.rpm': '6579df66aabf5be439915e9321b397ee',
        'x86_64.rpm': 'e77e3d657b3b1754ca76138ee5790109',
        'amd64.deb': '5e0dd1cfc197c5b02e32a72f30782bfc',
        'i386.deb': '4fc2b245e4b7f4e245fd2456fc671e9b'
      }
    },
    {
      version: '0.20.0-1',
      md5: {
        'i386.rpm': '0ca15ad11e0b1cf233cc968f721f9342',
        'x86_64.rpm': '71ef84896652fb86937ed46132ed8806',
        'amd64.deb': 'f1baf2ceba8bdcfa53da7cc88e6e8693',
        'i386.deb': '9d8dabca52580e42385a3adcbc5678d5'
      }
    },
    {
      version: '0.20.1-1',
      md5: {
        'i386.rpm': '6b29c6eb68312d6a5276591a0ea4786f',
        'x86_64.rpm': '9ba3995c596b97d0d87aa3c98603d5bb',
        'amd64.deb': 'adb10b536582dde7442818a74d622af7',
        'i386.deb': 'f3199174c8aeac74da81db604e8a6d6f'
      }
    },
    {
      version: '0.20.2-1',
      md5: {
        'i386.rpm': 'c7ee4a97e199ae343df7773efaad9ffa',
        'x86_64.rpm': '16da5ede5f2ed09623546318a6aaa7d2',
        'amd64.deb': '5dc84bb3f9d277c2286e83d05d7b9487',
        'i386.deb': 'a77f335589596a111573dc3c32b63d8a'
      }
    },
    {
      version: '0.21.0-1',
      md5: {
        'i386.rpm': '2748741d2090d136459c242c52adb395',
        'x86_64.rpm': '4f75dd10aabed79607a488a77ed2098e',
        'amd64.deb': '920ca35674cbe31f8b43f5b5dce018e7',
        'i386.deb': '5b46e88a3495ff1b9aabd0cf4f3e5637'
      }
    },
    {
      version: '0.22.0-1',
      md5: {
        'i386.rpm': 'b8b1e32f47a0fde502e1131a2b281085',
        'x86_64.rpm': '355b0f43681bce7d60dbc01c9141f3a1',
        'amd64.deb': '754c34d216f5938f472ae37fc0e3ac09',
        'i386.deb': 'b783e0cd7ff6d7e6898604471e331b29'
      }
    },
    {
      version: '0.22.1-1',
      md5: {
        'i386.rpm': '85b502a329e38a9cae594c1049e01f20',
        'x86_64.rpm': 'bc91b554e3d24aa913f9b7135d264c7f',
        'amd64.deb': '31069400feabf74d5e1ffd6736ab106b',
        'i386.deb': '0b4e52a0726b16cf9ceef6f43b201d69'
      }
    },
    {
      version: '0.22.2-1',
      md5: {
        'i386.rpm': '4d742734ee9dd8c38088383ae4f08028',
        'x86_64.rpm': '711ef265221e58c3408afc80d78eb38a',
        'amd64.deb': 'e4adae41017dc82f7ff2fb4990441cbd',
        'i386.deb': 'b98dcf4835356fc91f0c15a4251b3358'
      }
    },
    {
      version: '0.23.0-1',
      md5: {
        'i386.rpm': 'c51646ebfb22dc0b630723f11c31d430',
        'x86_64.rpm': '65804aa3183104e28a442c440392b46b',
        'amd64.deb': '671c6e8f5305fabc58cbedde251577f1',
        'i386.deb': 'b1923d88182296a9a27b72c54e23c900'
      }
    },
    {
      version: '0.23.1-1',
      md5: {
        'i386.rpm': '8931d1906ba6ec7e2f667313d1880be2',
        'x86_64.rpm': 'e13de6463ea7253ba857994a6a3a7e8e',
        'amd64.deb': 'fbe26d564d1e5a874f44082d5ce40562',
        'i386.deb': '61e4e589a7ae36683dd907436f63946f'
      }
    },
    {
      version: '0.24.0-1',
      md5: {
        'i386.rpm': '518d04a8c70b4cfbf5434b89a1839929',
        'x86_64.rpm': '5a21707dc0d3a55ca0b17973131ff067',
        'amd64.deb': '5522a45340ac1229647ea9c1a3c22074',
        'i386.deb': 'd5f02314cc3844f8f404588ecc114223'
      }
    },
    {
      version: '0.25.0-1',
      md5: {
        'i386.rpm': '290f4865d17725e272c3c55e477662fe',
        'x86_64.rpm': 'ef3091581afee0852e7e0596f64806ad',
        'amd64.deb': '7359a795682389abf917e7e366eb9c09',
        'i386.deb': '7e8f8ce0d47b2a4ecca24a465cbe2f5e'
      }
    },
    {
      version: '0.25.1-1',
      md5: {
        'i386.rpm': '9edcc5bd4688a7a24fa209cf2c1b46b6',
        'x86_64.rpm': '67b5109098c0c1537ce3e26ebbf366da',
        'amd64.deb': '39b98c657ee8b6264577f3cfe634b077',
        'i386.deb': 'db96c2343b829cf8940444fb548fa10c'
      }
    },
    {
      version: '0.25.2-1',
      md5: {
        'i386.rpm': '4ed3db6d4cb1e7c912b2eb83ab5fcb01',
        'x86_64.rpm': '4df35b20f682929bf564bb2871b6f466',
        'amd64.deb': 'cd3961570194c48c6d2c2a70c777a149',
        'i386.deb': '83f695fb2e59fd11f7c9ada229ae41a5'
      }
    },
    {
      version: '0.25.3-1',
      md5: {
        'i386.rpm': 'fa7deec78deeb1e304c748fbd14103be',
        'x86_64.rpm': '6c123d9b897b18dd85744d5c6bc02506',
        'amd64.deb': '942359880ab89f2e5ce7cb3df67c5fe0',
        'i386.deb': '654dbaee7cf9f684748efe0935288497'
      }
    },
    {
      version: '0.26.0-1',
      md5: {
        'i386.rpm': 'e3a4e66fdbae71e362ebf86564194dbc',
        'x86_64.rpm': '2aff9d4c149090edafbca0df203951ab',
        'amd64.deb': 'dab4e0fd5106f05c5585d1d5fabdb989',
        'i386.deb': '44273b9997165e7c5e41e7e83c18757d'
      }
    },
    {
      version: '0.26.1-1',
      md5: {
        'i386.rpm': 'af60b8477baa15ebbd5574bddf9115af',
        'x86_64.rpm': '3a5d43e5aadde510c3a6ad6b29cb9ce6',
        'amd64.deb': '83e8e402de059e31cdd0d4e8f9ffc8a8',
        'i386.deb': 'b8ecd2e457ab1393c02a812ae5499e0a'
      }
    },
    {
      version: '0.26.2-1',
      md5: {
        'i386.rpm': '3f7f93df294b4be55c82bf329135dc0e',
        'x86_64.rpm': 'bb511ba48a6bdf3df6a33d04b09099c9',
        'amd64.deb': '080e71b0d874d3a08d2dab84de16fdb6',
        'i386.deb': '2dbc0d2461e60a982c03d59b0ddfea68'
      }
    },
    {
      version: '0.26.3-1',
      md5: {
        'i386.rpm': '0f224fcd06a3e5f1d529f8abdf1eb770',
        'x86_64.rpm': 'b5d7ddd0782c4094db0df45bb9123ed9',
        'amd64.deb': '9fb87bc8bad3f656c87455e5e407d51b',
        'i386.deb': '915114cc14919eaf76bf95f19fe331a0'
      }
    },
    {
      version: '1.0.0-1',
      md5: {
        'i386.rpm': '96f5271f6fb3207727d155ba00aa0fa1',
        'x86_64.rpm': '4b0e4eb1a9bcff2ce28925ec392adf86',
        'amd64.deb': '90c5432a511257dcea97382bc845e74f',
        'i386.deb': '3d680b00fa6ac6f6f3ca84a21b08d2eb'
      }
    },
    {
      version: '1.1.0-1',
      md5: {
        'i386.rpm': '69f94f334f63ce158a2672012f11dccd',
        'x86_64.rpm': '921b80642779e0fa05425d26fc1c4891',
        'amd64.deb': 'cc4d03962d8b1601dc212606f9901688',
        'i386.deb': 'bc5ebd0b794db9b23576db8f1b1ee9da'
      }
    },
    {
      version: '1.1.1-1',
      md5: {
        'i386.rpm': '0e0ed6b5490c685e68d1ba0a8da8f7f6',
        'x86_64.rpm': '209f52855db7b83e71a425f37ca2d02a',
        'amd64.deb': '7c9f4d3507a6f73e2cdae8c1f1c66d56',
        'i386.deb': 'dc6b3007d1d345c0835ab8f31c8816cd'
      }
    },
    {
      version: '1.1.2-1',
      md5: {
        'i386.rpm': '232ad6dd98e3ab9887236938db57c747',
        'x86_64.rpm': '5a609374718059fb5bec6abe5c032dcd',
        'amd64.deb': 'ae14f40c1293d7cafb80ee70cb5967c9',
        'i386.deb': 'a91dc6538c4b09204fd45e811c16dee6'
      }
    },
    {
      version: '1.1.3-1',
      md5: {
        'i386.rpm': '21b434902939c815861ddb2214e8a877',
        'x86_64.rpm': 'e928a8397424159c6d2815e4ed1c570a',
        'amd64.deb': '252320d16fe2fb4db85155b5b1998dba',
        'i386.deb': '10b580226d4de4312cf2b745a0d7da6b'
      }
    },
    {
      version: '1.1.3-2',
      md5: {
        'i386.rpm': 'c1c563b95c5f305c1445f6ee463f2f23',
        'x86_64.rpm': '875480ad3870f4f0f41b7036bafb70d9',
        'amd64.deb': 'd600043cd28ef4741815743e55359d30',
        'i386.deb': '7ea95a34abe18ccdf2f331a679ad204c'
      }
    }
  ];
  var i = ($scope.downloads.length) - 1;
  $scope.latest = $scope.downloads[i]
}]);

controllerModule.controller('support', ['$scope', function ($scope) {
  $scope.email = 'hello@uchiwa.io';
}]);
