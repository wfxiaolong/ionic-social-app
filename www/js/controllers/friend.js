define(['app'],function (app) {
    app.controller('friendCtrl', ['$scope', function($scope) {
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

        // —°‘Ò¿‡–Õ
        var type = ['friend', 'group', 'focus'];
        $scope.type = type[0];
        $scope.changeType = function(num) {
            $scope.type = type[num];
        };

    }]);
});
    
