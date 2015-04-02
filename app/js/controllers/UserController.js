'use strict';

app.controller('UserController',
    function($scope, $rootScope, pageSize, userService){
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