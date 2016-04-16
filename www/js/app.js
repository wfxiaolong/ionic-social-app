
define(['ionic','asyncLoader','ngcordova'],function (ionic,asyncLoader) {
  var app = angular.module('app', ['ui.router', 'ionic', 'ngCordova']);
  asyncLoader.configure(app);
  return app;
});