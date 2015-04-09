'use strict';

app.controller('UserDeleteAdController',
    function($scope, $routeParams, $location, userService, notifyService){
        userService.getAdById($routeParams.id,
            function success(data){
                $scope.ad = data;
            },
            function error(err){

            }
        );
        $scope.deleteCurrentAd = function(id){
            userService.deleteAd($routeParams.id,
                function success(data){
                    notifyService.showInfo("Ad is successful deleted!");
                    $location.path('/user/ads');
                },
                function error(err){
                    notifyService.showError("Ad is not successful deleted!", err);
                }
            );
        };

        $scope.redirectToUserAds = function(){
            $location.path('/user/ads');
        };
    }
);