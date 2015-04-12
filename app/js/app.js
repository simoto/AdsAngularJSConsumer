'use strict';

var app = angular.module('app', ['ngRoute', 'ngResource', 'ui.bootstrap.pagination']);

app.constant('baseServiceUrl', 'http://softuni-ads.azurewebsites.net');
app.constant('pageSize', 2);

app.config(function ($routeProvider) {

    $routeProvider.when('/', {
        templateUrl: 'templates/home.html',
        controller: 'HomeController'
    });

    $routeProvider.when('/login', {
        templateUrl: 'templates/login.html',
        controller: 'LoginController'
    });

    $routeProvider.when('/register', {
        templateUrl: 'templates/register.html',
        controller: 'RegisterController'
    });

    $routeProvider.when('/user/home', {
        templateUrl: 'templates/home.html',
        controller: 'HomeController'
    });

    $routeProvider.when('/user/ads', {
        templateUrl: 'templates/user/user-ads.html',
        controller: 'UserController'
    });

    $routeProvider.when('/user/profile', {
        templateUrl: 'templates/user/user-profile.html',
        controller: 'UserProfileController'
    });

    $routeProvider.when('/user/changepassword', {
        templateUrl: 'templates/user/change-password.html',
        controller: 'UserProfileController'
    });

    $routeProvider.when('/user/ads/edit/:id', {
        templateUrl: 'templates/user/edit-ad.html',
        controller: 'UserEditAdController'
    });

    $routeProvider.when('/user/ads/delete/:id', {
        templateUrl: 'templates/user/delete-ad.html',
        controller: 'UserDeleteAdController'
    });

    $routeProvider.when('/user/ads/publish', {
        templateUrl: 'templates/user/publish-new-ad.html',
        controller: 'UserPublishNewAdController'
    });

    $routeProvider.when('/admin/home', {
        templateUrl: 'templates/home.html',
        controller: 'HomeController'
    });

    $routeProvider.otherwise(
        { redirectTo: '/' }
    );
});

//Global authorization check
app.run(function($rootScope, $location, authService){
    $rootScope.$on('$locationChangeStart', function(event){
        if($location.path().indexOf('/user/') != -1 && !authService.isLoggedIn()){
            // Authorization check: anonymous site visitors cannot access user routes
            $location.path('/');
        }
    });
});