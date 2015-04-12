'use strict';

// The HomeController holds the presentation logic for the home screen
app.controller('HomeController',
    function ($scope, $rootScope, adsService, categoriesService, notifyService, pageSize) {
        $scope.adsParams = {
            'startPage': 1,
            'pageSize': pageSize
        };

        $scope.reloadAds = function() {
            adsService.getAds(
                $scope.adsParams,
                function success(data) {
                   $scope.ads = data;
                },
                function error(err) {
                   notifyService.showError('Cannot load ads', err);
                }
            );
        };

        $scope.reloadAds();

        $scope.$on("categorySelectionChanged", function(event, clickedCategoryId){
            $scope.adsParams.categoryId = clickedCategoryId;
            $scope.adsParams.startPage = 1;
            $scope.reloadAds();
        });

        $scope.$on("townSelectionChanged", function(event, clickedTownId){
            $scope.adsParams.townId = clickedTownId;
            $scope.adsParams.startPage = 1;
            $scope.reloadAds();
        });
    }
);