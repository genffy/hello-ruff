'use strict';
$.ready(function (error) {
    if (error) {
        console.log(error);
        return;
    }
    $('#temperature').getTemperature(function (error, temperature) {
        if (error) {
            console.error(error);
            return;
        }

        console.log('temperature', temperature);
    });

    $('#temperature').getRelativeHumidity(function (error, humidity) {
        if (error) {
            console.error(error);
            return;
        }

        console.log('humidity', humidity);
    });

    $('#light').getIlluminance(function (error, value) {
        if (error) {
            console.error(error);
            return;
        }

        console.log('illuminance', value);
    });

});

$.end(function () {
});
