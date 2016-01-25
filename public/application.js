var appName = 'todo';
var app = angular.module(appName, ['ngRoute', 'example', 'users']);

app.config(['$locationProvider', function($locationProvider) {
    $locationProvider.hashPrefix('!');
    }
]);

if (window.location.hash === '#_=_') window.location.hash = '#!';

angular.element(document).ready(function() {
    angular.bootstrap(document, [appName]);
});

/* 
 * vim: ts=4 et nowrap autoindent
 */
