'use strict';

app.controller('UserPublishNewAdController',
    function($scope, $location, townsService, categoriesService, userService, notifyService) {
        $scope.adData = {townId: null, categoryId: null};
        $scope.categories = categoriesService.getCategories();
        $scope.towns = townsService.getTowns();

        $scope.publishAd = function(adData) {
            userService.createNewAd(adData,
                function success() {
                    notifyService.showInfo("Advertisement submitted for approval. Once approved, it will be published.");
                    $location.path("/user/ads");
                },
                function error(err) {
                    notifyService.showError("Publish ad failed!", err);
                }
            );
        };

        $scope.fileSelected = function(fileInputField) {
            delete $scope.adData.imageDataUrl;
            var file = fileInputField.files[0];
            if (file.type.match(/image\/.*/)) {
                var reader = new FileReader();
                reader.onload = function() {
                    $scope.adData.imageDataUrl = reader.result;
                    $("#adImagePrewiew").html('<img style="max-width: 200px; max-width: 200px" src="' + reader.result + '">');
                };
                reader.readAsDataURL(file);
            } else {
                $(".image-box").html("<p>File type not supported!</p>");
            }
        };

        $scope.redirectToUserAds = function(){
            $location.path('/user/ads');
        }
    }
);