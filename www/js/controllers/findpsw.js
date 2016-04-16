
define(['app'],function (app) {
    app.controller('findpswCtrl', ['$scope','$ionicHistory', function($scope,$ionicHistory) {
        $scope.showPassword = function() {
          $scope.show_psd = !$scope.show_psd
        }
    }]);
   
});