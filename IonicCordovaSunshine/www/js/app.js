angular.module('sunshine', ['ionic', 'sunshine.controllers', 'sunshine.services'])

.run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
        if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleLightContent();
        }
    });
})

.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

    //.state('app', {
    //    url: "/app",
    //    abstract: true,
    //    templateUrl: "templates/menu.html"
    //    //controller: 'MainCtrl'
    //})

    .state('app', {
        url: "/app",
        abstract: true,
        templateUrl: "templates/tabs.html"
        //controller: 'MainCtrl'
    })

    .state('app.forecastlist', {
        url: "/forecastList",
        views: {
            'forecastList': {
                templateUrl: "templates/forecastList.html",
                controller: 'WeatherCtrl'
            }
        }
    })

    .state('app.forecastdetail', {
        url: "/forecastDetail/:forecastId",
        views: {
            'forecast': {
                templateUrl: "templates/forecastDetail.html",
                controller: "ForecastCtrl"
            }
        }
    })

    .state('app.maplocation', {
        url: "/mapLocation",
        views: {
            'mapLocation': {
                templateUrl: "templates/mapLocation.html"
            }
        }
    })

    .state('app.settings', {
        url: "/settings",
        views: {
            'settings': {
                templateUrl: "templates/settings.html"
            }
        }
    });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/forecastList');
});
