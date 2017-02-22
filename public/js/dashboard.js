var socket;

var dashboard={
	
	init:function () {
	    //alert(123);
	    //post to connect
/*		$.post( "/connect", function( data ) {
		  //alert(Object.keys(data));
		  alert(data.msg);
		});*/
		socket=io();
		//socket = io.connect('http://192.168.223.130:3001');
		socket.on('connect', function(){
			$('#msg').html('connected to server');
			console.log('connected to server :  socket id: '+socket.id);
		});
		socket.on('adminMsg',function(data){
			//alert(data.msg);
			$('#msg').html(data.msg);
			//update UI
		});//
		socket.on('sendToWeb',function(data){
			console.log('web client : '+data);
			var display="<div>"+data+"</div>"
			if (data.name) {
			  display="<div>"+data.name+"</div>"				
			}
			$('#msg1').html($('#msg1').html()+'</p>  '+display);

		});//
/*		socket.on('gotMessage',function(data){
			//alert(data.msg);
			$('#msg').html($('#msg').html()+'</p>'+data.msg);
			//update UI
		});//*/
			
	}
};
