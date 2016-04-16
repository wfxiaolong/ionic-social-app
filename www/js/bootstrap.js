define(['ionic',
    'app',
    'routes',
    'appConfig',
    'js/utils/storage'
], function(ionic,app,routes,appConfig, storage){
    angular.element(document.getElementsByTagName('html')[0]).ready(function () {
        try {
            angular.bootstrap(document, ['app']);
        } catch (e) {
            console.error(e.stack || e.message || e);
        }
    });
});

