'use strict';

// The HomeController holds the presentation logic for the home screen
app.controller('HomeController',
    function ($scope, $rootScope, adsService, notifyService, pageSize) {
        adsService.getAds(null, function success(data){
            $scope.ads = data;
            notifyService.showInfo('Ads added');
        }, function error(err) {
            notifyService.showError('Cannot load ads', err);
        });
    }
);