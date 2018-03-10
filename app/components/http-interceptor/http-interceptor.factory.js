(function() {
    'use strict';

    angular
        .module('ngInterview.httpInterceptor')
        .factory('httpInterceptor', ['$injector', '$timeout', '$q', function($injector, $timeout, $q) {
            return {
                'responseError': function(response) {
                    // Check for 503 status code
                    if (response.status === 503) {
                        // Retry after a second
                        return $timeout(function() {
                            var $http = $injector.get('$http');
                            // Resend the request and return promise
                            return $http(response.config);
                        }, 1000);
                    }
                    return $q.reject(response);
                }
            };
        }]);

})();
