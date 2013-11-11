/**
 * @ngdoc service
 * @name ng2Auth.servicesAuthHTTPInterceptor
 * @description
 * Makes sure there's a valid session and emit
 * ng2Auth:login::begin on 403
 */
angular.module('ng2-loading')
.factory('LoadingHTTPInterceptor', ['$rootScope', '$q'
, function ($rootScope, $q) {
  return {
    request: function(config) {
      $rootScope.$broadcast('ng2loading:request',config);
      return config || $q.when(config);
    },

    requestError: function(rejection) {
      $rootScope.$broadcast('ng2loading:requestError',rejection);
      return $q.reject(rejection);
    },

    response: function(response) {
      $rootScope.$broadcast('ng2loading:response',response);
      return response || $q.when(response);
    },

    responseError: function(rejection) {
      $rootScope.$broadcast('ng2loading:responseError',rejection);
      return $q.reject(rejection);
    }
  };
}]);