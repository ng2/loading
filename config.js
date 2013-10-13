angular.module('ng2Auth')
.config(['$httpProvider'
  , function ($httpProvider) {
    $httpProvider.interceptors.push('LoadingHTTPInterceptor');
}])