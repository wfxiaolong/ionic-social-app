define(['app'],function (app) {
    app.controller('createGroupCtrl', ['$scope','$ionicPopup', function($scope, $ionicPopup) {
        // Triggered on a button click, or some other target
        $scope.addcomment = function() {
            $scope.data = {}
            var myPopup = $ionicPopup.show({
                template: '<input type="text" ng-model="data.comment">',
                title: '添加评论',
                scope: $scope,
                buttons: [
                    { text: '取消' },
                    {
                        text: '<b>保存</b>',
                        type: 'button-positive',
                        onTap: function(e) {
                            return $scope.data.comment;
                        }
                    }
                ]
            });
            myPopup.then(function(res) {
                console.log('Tapped!', res);
            });
        };

    }]);
   
});