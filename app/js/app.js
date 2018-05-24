 

(function(angular){
  var phoneCatApp = angular.module("phoneCatApp", ['ui.router', 'phoneList']);

  phoneCatApp.config(function($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('phoneList', {
          url: '/phoneList',
          templateUrl: 'modules/phoneList/phoneList.html',
          controller: 'phoneListCrtl'
        })
        .state('phoneDetail', {
              url: '/phoneDetail/:name',
              templateUrl: 'modules/phoneDetail/phoneDetail.html',
              controller:function($stateParams){
                alert($stateParams.username)
              }
        });
        $urlRouterProvider.when("", "/phoneList");
    });
})(angular)