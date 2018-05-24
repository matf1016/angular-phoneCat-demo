
(function(angular){
    var phoneListModel = angular.module('phoneList', []);

    phoneListModel.factory('phoneData', function($http){
        var phones = {};

        phones.getPhones = function(){
            return $http.get('phones/phones.json');
        }

        return phones;
    });

    phoneListModel.controller('phoneListCrtl',['$scope', 'phoneData', function($scope, phoneData){
        $scope.query = name;
        phoneData.getPhones().then(function(response){
            $scope.phones = response.data;
        });
    }]);
  })(angular)