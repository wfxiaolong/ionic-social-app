define(['app'],function (app) {
    app.controller('content-mineCtrl', ['$scope', '$stateParams', function($scope, $stateParams) {
        $scope.type = $stateParams.type;
    }]);
});
    
