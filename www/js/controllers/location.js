define(['app'],function (app) {
    app.controller('locationCtrl', ['$scope', '$stateParams', '$http', '$ionicHistory', function($scope, $stateParams, $http, $ionicHistory) {
        $scope.city_json = [];
        $scope.type = 0;

        $http({
            url:'data/city.json',
            method:'GET'
        }).success(function(data,header,config,status){
            $scope.city_json = data;
        });

        $scope.changeType = function(){
            $ionicHistory.goBack();
        }
    }]);
});
    
