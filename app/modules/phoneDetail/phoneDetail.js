
(function(angular){
    var phoneDetailModel = angular.module('phoneDetail', []);

    phoneDetailModel.factory('phoneDetailData', function($http){
        var phoneDetail = {};

        phoneDetail.getPhones = function(id){
            return $http.get('phones/' + id + '.json');
        }

        return phoneDetail;
    });

    phoneDetailModel.controller('phoneDetailCrtl',
    ['$scope', 'phoneDetailData', '$stateParams', 
    function($scope, phoneDetailData, $stateParams){
        $scope.id = $stateParams.id;

        phoneDetailData.getPhones($stateParams.id).then(function(response){
            $scope.detailData = response.data;
            console.log($scope.detailData);
        });
    }]);

  })(angular)