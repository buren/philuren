var express = require("express");
var less = require('less');

var app = express();

var serverPort 	= 	3700,
	phonePort 	= 	3701,
	clientPort 	= 	3702;

var WebSocketServer = require('ws').Server

//
//Configure view engine
//////////////////////////////////////////////////////////
app.set('views', __dirname + '/views');
app.set('view engine', "jade");
app.engine('jade', require('jade').__express);

app.use(express.static(__dirname + '/public'));

app.get("/", function(req, res){
    res.render("index");
});

//
//Configure websockets
//////////////////////////////////////////////////////////

var clientSocket = null;
var clientSocketServer = new WebSocketServer({port: clientPort});
clientSocketServer.on('connection', function(webSocket) {
	clientSocket = webSocket;
    webSocket.on('message', function(message) {
        console.log('client: %s', message);
    });
    webSocket.send('Connection accepted');
});

var phoneSocketServer = new WebSocketServer({port: phonePort});
phoneSocketServer.on('connection', function(webSocket) {
    webSocket.on('message', function(message) {
        console.log('phone: %s', message);
        clientSocket.send(message);
    });
    webSocket.send('Connection accepted');
    clientSocket.send('Phone connected');
});


//
//Start listening
//////////////////////////////////////////////////////////
app.listen(serverPort);
console.log("Listening on port " + serverPort);
