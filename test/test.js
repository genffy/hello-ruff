'use strict';

var assert = require('assert');
var path = require('path');
var test = require('test');

var appRunner = require('ruff-app-runner');
var mock = require('ruff-mock');

var verify = mock.verify;

var appPath = path.join(__dirname, '..');

module.exports = {
    // 'test should run application': function (done) {
    //     appRunner
    //         .run(appPath, function () {
    //             verify($('#led-r')).turnOn();
    //         })
    //         .end(function () {
    //             verify($('#led-r')).turnOff();
    //             done();
    //         });
    // },
    'it should get temperature': function (done) {
        when($('#temperature'))
            .getTemperature(Function)
            .then(function (callback) {
                callback(undefined, 26);
            });
    },
    'it should get light': function (done) {
        when($('#light'))
            .getIlluminance(Function)
            .then(function (callback) {
                callback(undefined, 100);
            });
    }
};

test.run(module.exports);
