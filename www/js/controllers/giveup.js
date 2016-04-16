define(['app'],function (app) {
    app.controller('giveupCtrl', ['$scope', '$stateParams', function($scope, $stateParams) {
        $scope.type = 0;
        $scope.changeType = function(type){
            $scope.type = type;
        }
    }]);
});
    
