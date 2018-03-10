(function() {
	'use strict';

	angular
		.module('ngInterview.api.students')
		.service('StudentsService', StudentsService);

	StudentsService.$inject = ['$http'];
	function StudentsService($http) {

		/**
		 * Exposed functions
		 */

		this.getName = getName; // This function serves no purpose. It's just here as an example.
		this.getStudents = getStudents;
		/**
		 * Implementations
		 */

		function getName() {
			return 'studentsService';
		}

		function getStudents() {
			return $http.get('http://il-resume-api.azurewebsites.net/api/students')
			.then(function(response) {
				return response.data;
			});
		}
	}
})();
