(function() {
    'use strict';

    angular
        .module('ngInterview.students')
        .controller('StudentsController', StudentsController);

    StudentsController.$inject = ['StudentsService'];

    function StudentsController(StudentsService) {

        /**
         * Model
         */

        var vm = this;

        vm.filterStudents = function() {
            var q = (vm.filterStudentsQuery || '').trim().toLowerCase();
            var name;
            if (q) {
                vm.filteredStudents = vm.students.filter(function(student) {
                    name = (student.FirstName + ' ' + student.LastName).toLowerCase();
                    return name.indexOf(q) > -1;
                });
            } else {
                vm.filteredStudents = angular.copy(vm.students);
            }
        };

        /**
         * Initialization
         */

        activate();

        /**
         * Implementations
         */

        function activate() {
            // Initialization code goes here
            vm.loadingStudents = true;
            return StudentsService.getStudents().then(function(data) {
                if (angular.isArray(data)) {
                    vm.students = data;
                    vm.filteredStudents = angular.copy(data);
                }
            }).catch(function(response) {
                alert("Unable to load the student data. Try again.");
            }).finally(function() {
                vm.loadingStudents = false;
            });
        }

    }
})();
