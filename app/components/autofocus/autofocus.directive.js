(function() {
    'use strict';

    angular
        .module('ngInterview.autofocus')
        .directive('autofocus', autofocusDirective);

    autofocusDirective.$inject = ['$timeout'];

    function autofocusDirective($timeout) {
        var directive = {
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element, attrs) {
            $timeout(function() {
                element[0].focus();
            });
        }
    }
})();
