<<<<<<< HEAD
const { error } = require('console');
const { Socket } = require('dgram');
=======
>>>>>>> 5855b681eb3582cab5bb6395e5fab35e6a147edb
const express = require('express');
const http = require('http');
const socketio = require('socket.io');

<<<<<<< HEAD
const { addUser, removeUser, getUser, getUsersInRoom } = require('./users');
=======
>>>>>>> 5855b681eb3582cab5bb6395e5fab35e6a147edb
const router = require('./router');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(router);

<<<<<<< HEAD
io.on('connect', (socket) => {
  Socket.on('join', ({ name, room}, callback) => {
    if(error) return callback(error);

    callback();
  });
});

=======
>>>>>>> 5855b681eb3582cab5bb6395e5fab35e6a147edb
server.listen(process.env.PORT || 5000, () => console.log('Server has started'));