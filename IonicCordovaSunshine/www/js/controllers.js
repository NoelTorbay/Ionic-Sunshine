angular.module('sunshine.controllers', [])

.controller('MainCtrl', function ($scope, $ionicSideMenuDelegate) {

    $scope.toggleLeft = function () {
        $ionicSideMenuDelegate.toggleLeft();
    };
})

.controller('WeatherCtrl', function ($scope, Weather) {

    var weatherData = Weather.all();

    $scope.city = weatherData[0].city;
    $scope.forecasts = weatherData[0].list;
})

.controller('ForecastCtrl', function ($scope, $stateParams, Weather) {

    var forecastData = Weather.get($stateParams.forecastId);

});