angular.module('sunshine.services', [])

.factory('Weather', function () {

    var forecasts = [{
        cod: "200",
        message: 0.0119,
        city: {
            id: 2636177,
            name: "Taunton",
            coord: {
                lon: -3.10472,
                lat: 51.021111
            },
            country: "GB",
            population: 0,
            sys: {
                population: 0
            }
        },
        cnt: 7,
        list: [
        {
            dt: 1432814400,
            temp: {
                day: 16.32,
                min: 10.58,
                max: 16.89,
                night: 10.58,
                eve: 15.04,
                morn: 14.86
            },
            pressure: 1018.18,
            humidity: 68,
            weather: [
            {
                id: 800,
                main: "Clear",
                description: "sky is clear",
                icon: "01d"
            }
            ],
            speed: 5.46,
            deg: 289,
            clouds: 0
        },
        {
            dt: 1432900800,
            temp: {
                day: 12.29,
                min: 9.61,
                max: 12.93,
                night: 9.61,
                eve: 11.72,
                morn: 9.95
            },
            pressure: 1016.02,
            humidity: 65,
            weather: [
            {
                id: 500,
                main: "Rain",
                description: "light rain",
                icon: "10d"
            }
            ],
            speed: 7.11,
            deg: 284,
            clouds: 76,
            rain: 0.42
        },
        {
            dt: 1432987200,
            temp: {
                day: 14.39,
                min: 10.29,
                max: 15.04,
                night: 13.12,
                eve: 15.04,
                morn: 10.29
            },
            pressure: 1017.09,
            humidity: 0,
            weather: [
            {
                id: 500,
                main: "Rain",
                description: "light rain",
                icon: "10d"
            }
            ],
            speed: 7.56,
            deg: 212,
            clouds: 82,
            rain: 2.17
        },
        {
            dt: 1433073600,
            temp: {
                day: 15.14,
                min: 11.38,
                max: 15.26,
                night: 11.38,
                eve: 15.26,
                morn: 12.51
            },
            pressure: 1016.14,
            humidity: 0,
            weather: [
            {
                id: 500,
                main: "Rain",
                description: "light rain",
                icon: "10d"
            }
            ],
            speed: 6.42,
            deg: 235,
            clouds: 47,
            rain: 1.21
        },
        {
            dt: 1433160000,
            temp: {
                day: 15.02,
                min: 11.25,
                max: 15.02,
                night: 11.25,
                eve: 13.28,
                morn: 12.1
            },
            pressure: 1005.98,
            humidity: 0,
            weather: [
            {
                id: 501,
                main: "Rain",
                description: "moderate rain",
                icon: "10d"
            }
            ],
            speed: 13.22,
            deg: 213,
            clouds: 89,
            rain: 6.17
        },
        {
            dt: 1433246400,
            temp: {
                day: 13.45,
                min: 10.63,
                max: 13.45,
                night: 10.63,
                eve: 12.36,
                morn: 11.16
            },
            pressure: 1013.71,
            humidity: 0,
            weather: [
            {
                id: 501,
                main: "Rain",
                description: "moderate rain",
                icon: "10d"
            }
            ],
            speed: 7.1,
            deg: 254,
            clouds: 69,
            rain: 3.16
        },
        {
            dt: 1433332800,
            temp: {
                day: 13.1,
                min: 10.98,
                max: 13.1,
                night: 10.98,
                eve: 12.58,
                morn: 10.98
            },
            pressure: 1024.78,
            humidity: 0,
            weather: [
            {
                id: 500,
                main: "Rain",
                description: "light rain",
                icon: "10d"
            }
            ],
            speed: 5.9,
            deg: 281,
            clouds: 36,
            rain: 1.89
        }
        ]
    }]

    return {
        all: function () {
            return forecasts;
        }
    };
});