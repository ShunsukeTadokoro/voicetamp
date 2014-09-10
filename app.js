var io = require('socket.io');
var express = require('express');
var http = require('http');

var app = express();
app.use(express.static(__dirname + '/public'));

var server = http.createServer(app).listen(8080);
var io = io.listen(server);

io.sockets.on('connection',  function(socket){
       socket.on('voice', function(sound){
                socket.emit('voice', sound);
                socket.broadcast.emit('voice', sound);
        });
});