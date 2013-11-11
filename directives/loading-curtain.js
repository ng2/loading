/**
 * @ngdoc directive
 * @name ng2Core.directives:loadingCurtain
 * @description
 * ...
 */
angular.module('ng2-loading')
  .directive('loadingCurtain',['$rootScope', function ($rootScope) {
    'use strict';

    return {
      priority: 0,
      template: require('../views/loading-curtain'),
      restrict: 'E',
      replace: true,
      link: function(scope, element, attr) {
        var hide = function (event, data) {
          element.removeClass('curtain-show');
          element.addClass('curtain-hide');
        };

        var show = function (event, data) {
          element.removeClass('curtain-hide');
          element.addClass('curtain-show');
        }

        $rootScope.$on('ng2loading:request', show);
        $rootScope.$on('ng2loading:response', hide);
        $rootScope.$on('ng2loading:requestError', hide);
        $rootScope.$on('ng2loading:responseError', hide);
      }
    };
  }
]);