define(['app', 'js/utils/citySelect'],function (app, CitySelect) {
    app.controller('personalCtrl', ['$scope','$ionicActionSheet', function($scope, $ionicActionSheet) {
        $scope.changeImg = function(){
            // Show the action sheet
            var hideSheet = $ionicActionSheet.show({
                buttons: [
                    { text: '从相册中选择' },
                    { text: '拍照' }
                ],
                titleText: '确认修改图片',
                cancelText: '取消',
                cancel: function() {
                    // add cancel code..
                },
                buttonClicked: function(index) {
                    return true;
                }
            });
        }

        //显示地址选择
        $scope.template = {
            area:""
        }
        $scope.showCitySelect = function() {
            CitySelect.init({
                element: ".js-citySelestNode",
                value: ["广东省", "广州市", "天河区"],
                callback: function(data) {
                    $scope.$apply(function() {
                        $scope.template.area = data.join('，')
                    })
                },
                initComplete: function(data) {
                    if ($scope.template.area != '') {
                        var data = $scope.template.area.split('，');
                        CitySelect.set(data)
                    } else {
                        $scope.$apply(function() {
                            $scope.template.area = data.join('，')
                        })
                    }

                },
                url: 'data/city.json'
            })

        }
    }]);
   
});