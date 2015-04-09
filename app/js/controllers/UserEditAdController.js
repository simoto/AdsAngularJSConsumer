'user strict';

app.controller('UserEditAdController',
    function($scope, $routeParams, $location, townsService, categoriesService, userService, notifyService){
        var adId = $routeParams.id;
           $scope.adData = {};
           userService.getAdById(adId,
            function success(data){
                $scope.adData = data;
            },
            function error(err){

            }
        );
        $scope.categories = categoriesService.getCategories();
        $scope.towns = townsService.getTowns();
        $scope.submitEditAd = function(data){
            userService.editAd(data,
                function success(data){
                    notifyService.showInfo("Ad is successful edited!");
                    $location.path('/user/ads/');
                },
                function error(err){
                    notifyService.showError("Ad is not successful edited!", err);
                }
            );
        };

        $scope.deleteImage = function(){
            $scope.adData.imageDataUrl = null;
            $scope.adData.changeImage = true;
        };

        $scope.fileSelected = function(fileInputField) {
                delete $scope.adData.imageDataUrl;
            var file = fileInputField.files[0];
            if (file.type.match(/image\/.*/)) {
                var reader = new FileReader();
                reader.onload = function() {
                    $scope.adData.imageDataUrl = reader.result;
                    $scope.adData.changeImage = true;
                    $("#adImagePrewiew").html('<img style="max-width: 200px; max-width: 200px" src="' + $scope.adData.imageDataUrl + '">');
                };
                reader.readAsDataURL(file);
            } else {
                $(".image-box").html("<p>File type not supported!</p>");
            }
        };
    }
);