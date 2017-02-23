var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
  callServer(req.body);
  res.send('ok!');
});

router.get('/', function(req, res, next) {
  var payload=req.query.data || 'hello world';
  callServer(payload);
  res.send('ok!');
});

function callServer (payload) {
console.log("inside call server");
//var socket = require('socket.io-client')('http://192.168.223.130:3001');
var io = require('socket.io-client');
var target=process.env.TARGET || 'http://localhost:8080';
var socket = io.connect(target, {reconnect: true});
//var socket = io.connect("http://socket-rest-wohshon.44fs.preview.openshiftapps.com/", {reconnect: true});
socket.on('connect', function(){
  console.log('[Client] Client '+socket.id+' connected to server!!!');
});

/*socket.on('gotMessage', function(data){
 console.log('update! '+data.msg);
});
*/
socket.on('disconnect', function(){
 console.log('[Client] I am disconnected!!');
});

console.log("[call server] "+payload);

console.log("[call server] "+Object.keys(payload));
socket.emit('updateDashboard', payload);   


}

module.exports = router;
