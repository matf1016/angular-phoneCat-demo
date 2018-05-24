(function(angular){
    var phoneFiltersModel = angular.module('phoneFilters', []);

    phoneFiltersModel.filter('checkmark', function(){
        return function(input) {
            return input ? '\u2713' : '\u2718';
        }
        
    });
})(angular)