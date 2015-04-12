'use strict';

app.factory('categoriesService',
    function($resource, baseServiceUrl, $http){
        var categoriesResource = $resource(baseServiceUrl + '/api/categories');
        return {
            getCategories: function(success, error){
                return categoriesResource.query(success, error);
            },
            getCategoryById: function(id){
                var request = {
                    method: 'GET',
                    url: baseServiceUrl + 'api/categories/' + id
                };

                $http(request).success(success).error(error);
            }
        }
    }
);