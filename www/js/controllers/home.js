define(['app'],function (app) {
    app.controller('homeCtrl', ['$scope', function($scope) {
        var pages = "#/tab/home+#/tab/message+#/tab/add+#/tab/friend+#/tab/mine";
        $scope.$on('$ionicView.afterEnter', function() {
            if (pages.indexOf(location.hash) > -1) {
                var tabs =document.getElementsByTagName('ion-tabs');
                angular.element(tabs).removeClass("tabs-item-hide");
            }
        });
        $scope.$on('$ionicView.beforeLeave', function() {
            if (pages.indexOf(location.hash) > -1) return;
            var tabs =document.getElementsByTagName('ion-tabs');
            angular.element(tabs).addClass("tabs-item-hide");
        });

        var varity = ['discovery', 'location'];
        $scope.type = varity[0];
        $scope.changeType = function(num) {
            $scope.type = varity[num];
        };
        var activity = ['activity', 'personal', 'group'];
        $scope.act = activity[0];
        $scope.changeAct = function(num) {
            $scope.act = activity[num];
        };

    }]);
});
    
