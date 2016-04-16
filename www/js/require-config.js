require.config({
    baseUrl: './',
    paths: {
        'app': 'js/app',
        'appConfig':'js/app-config',
        'routes': 'js/routes',
        'ionic': 'lib/ionic/js/ionic.bundle',
        'ngcordova': 'lib/ngCordova/dist/ng-cordova',
        'bootstrap':'js/bootstrap',
        'zepto':'lib/zepto/zepto.min',
        'asyncLoader': 'lib/async-loader/angular-async-loader'
    },
    shim: {
        'app': {
            deps: ['ionic']
        },
        'routes': {
            deps: ['ionic','app']
        },
        'appConfig':{
            deps: ['app']
        },
        'ionic' : {exports : 'ionic'},
    },
    priority: [
        'ionic',
        'ngcordova',
        'app',
        'routes',
        'appConfig'
    ],
    deps: [
        'bootstrap'
    ]
});