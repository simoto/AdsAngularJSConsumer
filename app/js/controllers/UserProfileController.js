'use strict';

app.controller('UserProfileController',
    function($scope, $location, townsService, userService, notifyService){
         userService.getUserProfile(
              function success(data){
                   $scope.userData = data;
              },
              function error(err){

              }
         );

        $scope.towns = townsService.getTowns();
        $scope.updateUserInformation = function(data){
              userService.updateUserProfile(data,
                    function success(succ) {
                         notifyService.showInfo("Profile was successful updated!")
                    },
                    function error(err){
                         notifyService.showError("Update profile failed!", err);
                    }
              );
        };

        $scope.redirectToUserAds = function(){
            $location.path('/user/home');
        };
    }
);