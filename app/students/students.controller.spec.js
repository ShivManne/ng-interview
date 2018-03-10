'use strict';

describe('ngInterview.students module', function() {

    var $controller;

    beforeEach(function() {
        module('ngInterview.students');
        inject(function(_$controller_) {
            $controller = _$controller_;
        });
    });

    describe('StudentsController', function() {

        it('should instantiate', function() {
            var studentsCtrl = $controller('StudentsController');
            expect(studentsCtrl).toBeDefined();
        });

        it('should filter student data', function() {
            var studentsCtrl = $controller('StudentsController');
            studentsCtrl.students = [{
                id: 1,
                FirstName: 'Abraham',
                LastName: 'Lincoln'
			}, {
                id: 2,
                FirstName: 'Albert',
                LastName: 'Einstein'
			}];
            studentsCtrl.filterStudentsQuery = 'ein';
            studentsCtrl.filterStudents();
            expect(studentsCtrl.filteredStudents.length).toEqual(1);
        });

    });

});
