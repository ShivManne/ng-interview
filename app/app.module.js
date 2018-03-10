(function() {
    'use strict';

    angular.module('ngInterview', [
		'ngRoute',
        'ngInterview.autofocus',
		'ngInterview.currentDate',
		'ngInterview.students',
		'ngInterview.httpInterceptor'
	]);
})();
