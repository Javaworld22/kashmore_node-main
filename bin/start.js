#!/usr/bin/env node

/**
 * Module dependencies.
 */

var app = require('../app');
var debug = require('debug')('kashmore-node:server');
var http = require('http');
<<<<<<< HEAD
var onSocket = require('../channel');
=======
require('dotenv').config();
>>>>>>> e44ebc0608b34fb7afc0a9d49648033bf5c9fb34

/**
 * Get port from environment and store in Express.
 */

<<<<<<< HEAD
var port = normalizePort(process.env.PORT || '3000');
=======
var port = normalizePort(process.env.PORT || '8080');
>>>>>>> e44ebc0608b34fb7afc0a9d49648033bf5c9fb34
app.set('port', port);

/**
 * Create HTTP server.
 */

var server = http.createServer(app);

<<<<<<< HEAD
// create socket streams
var io = require('socket.io')(server);

=======
>>>>>>> e44ebc0608b34fb7afc0a9d49648033bf5c9fb34
/**
 * Listen on provided port, on all network interfaces.
 */

<<<<<<< HEAD

 io.on('connection', onSocket);



=======
>>>>>>> e44ebc0608b34fb7afc0a9d49648033bf5c9fb34
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}
