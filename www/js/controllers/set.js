define(['app'],function (app) {
    app.controller('setCtrl', ['$scope', '$ionicPopup', '$ionicHistory', 'Storage', function($scope, $ionicPopup, $ionicHistory, Storage) {
        $scope.comfirm = function () {
            $ionicHistory.goBack();
            Storage.set("DM_Auth", "");
            setTimeout(function(){
                location.href = "#/index";
            }, 100);
        }
    }]);
   
});