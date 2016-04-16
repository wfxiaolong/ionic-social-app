define(['app'],function (app) {
    app.controller('searchCtrl', ['$scope', '$stateParams', function($scope, $stateParams) {
        $scope.tag = "";

        $scope.delete = function () {
            $scope.tag = "";
        }
    }]);
});
    
