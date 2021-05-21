var express = require('express')
var app = express()
var http = require('http').createServer(app);

http.listen(process.env.PORT || 6996, function () {
  var host = http.address().address
  var port = http.address().port
  console.log('App listening at http://%s:%s', host, port)
});

const io = require("socket.io")(http, {
  cors: {
    origin: [
      "http://localhost", 
      "http://192.168.1.25", 
      "http://ipdncms.test", 
      "https://ipdncms.xyrus10.com", 
      "http://ipdncms.xyrus10.com", 
      "https://ipdn-socket.herokuapp.com",
      "http://chatapp.test"
    ],
    methods: ["GET", "POST"],
    allowedHeaders: ["my-custom-header"],
    credentials: true
  }
});

var clients = []

io.on("connection", socket => {

  socket.on("join", param => {
    console.log("user join")
    // clients.push(socket.client.id)
    // console.log(clients)
  })

  socket.on("affectDataTable", param => {
    console.log("Affected DataTable")
    console.log(param)
    io.emit("refreshDataTable", param)
  })

  socket.on("sendMessage", param => {
    console.log("Message Send")
    console.log(param)
    io.emit("getMessage", param)
  })

  socket.on("disconnect", (reason) => {
    console.log("user leave")
    // console.log(reason)
    // var i = clients.indexOf(socket.client.id);
    // clients.splice(i, 1);
    // console.log(clients)
  })
})