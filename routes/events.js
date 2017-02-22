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
//var socket = require('socket.io-client')('http://192.168.223.130:3001');
var io = require('socket.io-client');
var target=process.env.TARGET || 'http://localhost:3000';
var socket = io.connect('http://localhost:3000', {reconnect: true});

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

console.log(payload);
socket.emit('updateDashboard', payload);   


}

module.exports = router;
