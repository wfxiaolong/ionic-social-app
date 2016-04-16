define(['app'],function (app) {
    app.controller('groupDetailCtrl', ['$scope','$ionicPopup', function($scope, $ionicPopup) {
        // Triggered on a button click, or some other target
        $scope.type = "post";

        var type = ["post", "act"];
        $scope.changeType = function (a) {
            $scope.type = type[a];
        }
    }]);
   
});