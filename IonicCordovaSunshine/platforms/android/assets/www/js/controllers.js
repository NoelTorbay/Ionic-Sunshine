angular.module('sunshine.controllers', [])

.controller('WeatherCtrl', function ($scope, Weather) {

    var weatherData = Weather.all();

    $scope.city = weatherData[0].city;
    $scope.forecasts = weatherData[0].list;
})