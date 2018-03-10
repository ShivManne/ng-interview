(function() {
    'use strict';

    angular
        .module('ngInterview.httpInterceptor')
        .config(config);

    config.$inject = ['$httpProvider'];

    function config($httpProvider) {
        $httpProvider.interceptors.push('httpInterceptor');
    }
})();
