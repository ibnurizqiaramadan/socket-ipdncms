// import cors from 'cors'
const socket = require('socket.io')();
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = socket.listen(server);
const port = process.env.PORT || 3000;

// app.use(cors())

server.listen(port, function () {
	console.log('Server listening at port %d', port);
});

io.on('connection', function (socket) {
	socket.on("join", param => {
		console.log("user join")
	})
});
