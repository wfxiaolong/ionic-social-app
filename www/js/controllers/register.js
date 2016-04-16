
define(['app'],function (app) {
    app.controller('registerCtrl', ['$scope','$ionicHistory', function($scope,$ionicHistory) {
        // $scope.name = 'register';
        $scope.back = function() {
          $ionicHistory.goBack();
        }
        $scope.showPassword = function() {
          $scope.show_psd = !$scope.show_psd
        }
    }]);
   
});