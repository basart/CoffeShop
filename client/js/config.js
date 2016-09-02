angular.module('coffeeShopApp').config(['cloudinaryProvider', function (cloudinaryProvider) {
  cloudinaryProvider
      .set("cloud_name", "dxvsm28th")
      .set("upload_preset", "rj3sn1br");
}]);