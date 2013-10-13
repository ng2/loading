/**
 * @ngdoc directive
 * @name ng2Core.directives:loadingCurtain
 * @description
 * ...
 */
angular.module('ng2Loading')
  .directive('loadingCurtain',['$rootScope', function ($rootScope) {
    'use strict';

    return {
      priority: 0,
      template: require('../views/loading-curtain'),
      restrict: 'E',
      replace: true,
      link: function(scope, element, attr) {
        $rootScope.$on('ng2loading:request', function (event, data) {
          element.addClass('show')
        });
      }
    };
  }
]);