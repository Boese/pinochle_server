'use strict';

const Hapi = require('hapi');

const server = new Hapi.Server();
server.connection({ port: 3000 });

server.register([
        { register: require('./plugins/game_engine'), options: {} }
    ]   , (err) => {

    if (err) {
        throw err; 
    }

    server.start((err) => {

        if (err) {
            throw err;
        }
        console.log('info', 'Server running at: ' + server.info.uri);
    });
});