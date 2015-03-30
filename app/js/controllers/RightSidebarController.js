'use strict';

// The RightSidebarController controls the content displayed in the right sidebar
app.controller('RightSidebarController',
    function ($scope, $rootScope, categoriesService, townsService) {
        $scope.categories = categoriesService.getCategories();
        $scope.towns = townsService.getTowns();
        $scope.categoryClicked = function(clickedCategoryId) {
            $scope.selectedCategoryId = clickedCategoryId;
        };

        $scope.townClicked = function(clickedTownId){
            $scope.selectedTownId = clickedTownId;
        };

    }
);