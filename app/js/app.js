 

(function(angular){
  var phoneCatApp = angular.module("phoneCatApp", ['ui.router', 'phoneList', 'phoneDetail', 'phoneFilters']);

  phoneCatApp.config(function($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('phoneList', {
          url: '/phoneList',
          templateUrl: 'modules/phoneList/phoneList.html',
          controller: 'phoneListCrtl'
        })
        .state('phoneDetail', {
              url: '/phoneDetail/:id',
              templateUrl: 'modules/phoneDetail/phoneDetail.html',
              controller:'phoneDetailCrtl'
        });
        $urlRouterProvider.when("", "/phoneList");
    });

    
    
})(angular)