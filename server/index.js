const express = require('express');
const http = require('http');
const socketio = require('socket.io');

const router = require('./router');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(router);

server.listen(process.env.PORT || 5000, () => console.log('Server has started'));