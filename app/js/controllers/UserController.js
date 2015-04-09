'use strict';

app.controller('UserController',
    function($scope,$location, $rootScope, pageSize, userService, notifyService){
        $scope.adsParams = {
            'startPage': 1,
            'pageSize': pageSize
        };

        $scope.reloadUserAds = function() {
            userService.getUserAds(
                $scope.adsParams,
                function success(data) {
                    $scope.userAds = data;
                },
                function error(err) {
                    notifyService.showError('Cannot load ads', err);
                }
            );
        };

        $scope.deactivateBtnClicked = function(id){
            userService.deactivateAd(id,
                function success(data){
                    notifyService.showInfo("Ad is successful deactivated!");
                    $scope.reloadUserAds();
                },
                function error(err){
                    notifyService.showError("Ad is not successful deactivated!", err);
                }
            );
        };

        $scope.publishAgainBtnClicked = function(id){
            userService.publishAgainAd(id,
                function success(data){
                    notifyService.showInfo("Advertisement submitted for approval. Once approved, it will be published.");
                    $scope.reloadUserAds();
                },
                function error(err){
                    notifyService.showError("Ad republish failed", err);
                }
            );
        };

        $scope.redirectToEditAd = function(id){
            $location.path('/user/ads/edit/' + id);
        };

        $scope.reloadUserAds();

        $scope.statusClicked = function(clickedStatusId) {
            $scope.selectedStatusId = clickedStatusId;
            $rootScope.$broadcast("statusSelectionChanged", clickedStatusId);
        };

        $scope.$on("statusSelectionChanged", function(event, clickedStatusId){
            $scope.adsParams.status = clickedStatusId;
            $scope.adsParams.startPage = 1;
            $scope.reloadUserAds();
        });

    }
);