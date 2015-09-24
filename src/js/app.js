angular.module('ionicApp', ['ionic','myApp.controllers'])


.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider.state('tabs', {
      url: "/tabs",
      "abstract": true,
      templateUrl: "templates/tabs.html"
  })


  .state('tabs.home', {
    url: '/home',
    views:{
        'tabs-home':{
            templateUrl: "templates/tabs-home.html",
            controller:'homeCtrl'

        }

    }

  })
  .state('tabs.about', {
      url: '/about',
      views:{
          'tabs-about':{
              templateUrl: "templates/tabs-about.html",
              controller:'aboutCtrl'
          }

      }

  })
  .state('tabs.aboutContent', {
      url: '/aboutContent',
      views: {
        'tabs-about': {
          templateUrl: "templates/tabs-aboutContent.html"
        }
      }
  })
  .state('tabs.aboutContent2', {
      url: '/aboutContent2',
      views: {
        'tabs-about': {
          templateUrl: "templates/tabs-aboutContent2.html"
        }
      }
  })
  .state('tabs.setting', {
      url: '/setting',
      views:{
          'tabs-setting':{
              templateUrl: "templates/tabs-setting.html",
              controller:'settingCtrl'
          }

      }

  })

  .state('other', {
      url: '/other',
      templateUrl: "templates/other.html"
  });

  $urlRouterProvider.otherwise('/tabs/home');
  

});