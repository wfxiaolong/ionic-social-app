define(['app'], function(app){
    app
      .config(['$ionicConfigProvider','$sceDelegateProvider', function($ionicConfigProvider,$sceDelegateProvider) {
          $ionicConfigProvider.tabs.position('bottom'); // other values: top
          $ionicConfigProvider.platform.android.views.maxCache(5); //安卓缓存5个view，ios默认10个
          $ionicConfigProvider.tabs.style('standard');

          $sceDelegateProvider.resourceUrlWhitelist([
            // Allow same origin resource loads.
            'self',
            // Allow loading from our assets domain.  Notice the difference between * and **.
            'http://srv*.assets.example.com/**'
          ]);
          
          /*    // The blacklist overrides the whitelist so the open redirect here is blocked.
          *    $sceDelegateProvider.resourceUrlBlacklist([
          *      'http://myapp.example.com/clickThru**'
          *    ]);
          */
      }])
      .run(function($ionicPlatform) {
          $ionicPlatform.ready(function() {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
              cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
              cordova.plugins.Keyboard.disableScroll(true);

            }
            if (window.StatusBar) {
              // org.apache.cordova.statusbar required
              StatusBar.styleLightContent();
            }
          });


        });
});
