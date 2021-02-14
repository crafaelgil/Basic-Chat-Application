const { error } = require('console');
const { Socket } = require('dgram');
const express = require('express');
const http = require('http');
const socketio = require('socket.io');

const { addUser, removeUser, getUser, getUsersInRoom } = require('./users');
const router = require('./router');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(router);

io.on('connect', (socket) => {
  Socket.on('join', ({ name, room}, callback) => {
    if(error) return callback(error);

    callback();
  });
});

server.listen(process.env.PORT || 5000, () => console.log('Server has started'));