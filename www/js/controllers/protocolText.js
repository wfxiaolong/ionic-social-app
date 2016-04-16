define(['app'],function (app) {
    app.controller('protocolTextCtrl', ['$scope', '$stateParams', function($scope, $stateParams) {
        $scope.type = $stateParams.type;
    }]);
});
    
