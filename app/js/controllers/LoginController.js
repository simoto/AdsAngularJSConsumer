'use strict';

// The LoginController is responsible for the "Login" screen
app.controller('LoginController',
    function ($scope, $location, authService, notifyService) {
        $scope.login = function(userData){
            authService.login(userData,
                function success(){
                    notifyService.showInfo("Login successful!");
                    $location.path('/user/home');
                },
                function error(err){
                    notifyService.showError("Login failed:", err);
                    $location.path('/login');
                }
            );
        };

        $scope.redirectToRegister = function (){
            $location.path('/register');
        };
    }
);