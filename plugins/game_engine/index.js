'use strict';

exports.register = function (server, options, next) {
    next();
};

exports.register.attributes = {
    name: 'game_engine'
};