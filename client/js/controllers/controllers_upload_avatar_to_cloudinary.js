'use strict';

var photoAlbumControllers = angular.module('photoAlbumControllers', ['ngFileUpload']);

photoAlbumControllers.controller('photoUploadCtrl', ['$scope', '$rootScope', '$routeParams', '$location', 'Upload', 'cloudinary', 'User',
  function($scope, $rootScope, $routeParams, $location, $upload, cloudinary, User) {
    var d = new Date();
    $scope.title = "Image (" + d.getDate() + " - " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds() + ")";

    $scope.uploadFiles = function(files){
      $scope.files = files;
      if (!$scope.files) return;
      angular.forEach(files, function(file){
        if (file && !file.$error) {
          file.upload = $upload.upload({
            url: "https://api.cloudinary.com/v1_1/" + cloudinary.config().cloud_name + "/upload",
            data: {
              upload_preset: cloudinary.config().upload_preset,
              tags: 'myphotoalbum',
              context: 'photo=' + $scope.title,
              file: file
            }
          }).progress(function (e) {
            file.progress = Math.round((e.loaded * 100.0) / e.total);
            file.status = "Uploading... " + file.progress + "%";
          }).success(function (data, status, headers, config) {
            $rootScope.photos = $rootScope.photos || [];
            data.context = {custom: {photo: $scope.title}};
            file.result = data;
            $rootScope.currentUser.avatarUrl = file.result.secure_url;
            console.log($rootScope.currentUser);
            User.upsert($rootScope.currentUser)
            .$promise
            .then(function(res) 
              {
                $location.path('/');
              }, function(err, res) {
                $scope.error = err.status;
              });
            console.log(file.result);
            console.log(file.result.secure_url);
            $rootScope.photos.push(data);
          }).error(function (data, status, headers, config) {
            file.result = data;
          });
        }
      });
    };
}]);