'use strict';

app.controller('RegisterController',
    function($scope, $location, authService, townsService, notifyService){
        $scope.userData = {townId: null};
        $scope.towns = townsService.getTowns();
        $scope.redirectToLogin = function (){
            $location.path('/login');
        };

        $scope.register = function(userData){
            authService.register(userData,
                function success(){
                    notifyService.showInfo("Registration successful!");
                    $location.path('/');
                },
                function error(err){
                    notifyService.showError("Something wrong, registration is not successful!", err);
                }
            );
        }
    }
);