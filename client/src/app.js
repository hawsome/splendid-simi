var ParkAssist = angular.module('ParkAssist', [
  'ui.router',
  require('./map').name,
  require('./user').name,
  require('./markers').name,
  require('./modal').name,
  require('./locator').name,
  require('./directions').name
]);

ParkAssist.config(['$urlRouterProvider', function($urlRouterProvider) {
  $urlRouterProvider
    .otherwise('/');
}]);