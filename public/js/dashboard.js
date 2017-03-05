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
		var FuseRequest=0;
		socket.on('connect', function(){
			//$('#msg').html('connected to server');
			console.log('connected to server :  socket id: '+socket.id);
		});
		socket.on('adminMsg',function(data){
			//alert(data.msg);
			//update UI
			$('#msg').html(data.msg);
		});//
		socket.on('sendToWeb',function(data){

			console.log('web client : '+Object.keys(data));
			console.log('source : '+data["source"]);
			//var parsedData = JSON.parse(data); // not needed
			var parsedData = data;
			//console.log(" parse " +Object.keys(parsedData));
			var display="<div>"+parsedData+"</div>"
			//flow for booking request
//			if (parsedData.traveller) {
	console.log("ddd "+parsedData.traveller);
			if (parsedData["source"]=="mobile" && parsedData.traveller) {

			  //display="<div>"+parsedData.traveller+"</div>"
			//  display=renderDisplay(parsedData);
				display="<section>"+renderDisplay(parsedData)+"</section>";
				$('#msg1').html($('#msg1').html()+'  '+display);

			} else if (parsedData.podCount) {
				//console.log("*****"+parsedData.podCount);
				display="<section>"+parsedData.podCount+ " pods</section>";
				$('#msg').html($('#msg').html()+'  '+display);

			} else if (parsedData["source"]=="fuse"){
				//console.log("*****Event from Fuse***");
                                display=$('#msg2').html()+'  '+"<section>Booking received from Backend "+eval(parsedData.event+FuseRequest)+ " </section>";
                                $('#msg2').html(display);
                                FuseRequest+=parsedData.event;
				
			}
		});//

		function renderDisplay(data) {
		   var  display="";
		   display+= "<div><b>"+data.traveller+"'s booking:</b></div>";
		   display+="<div></div>";
		   if (data.flightReq) {
		       display+="<div class=\"flight\"><b >flight : </b>"+data["flightReq"].flightNo+"</div>";
		   }
		   if (data.hotelReq) {
		       display+="<div class=\"hotel\"><b >Hotel : </b>"+data["hotelReq"].hotelId+"</div>";
		   }
		   if (data.carReq) {
		       display+="<div class=\"car\"><b >Car Rental : </b>"+data["carReq"].carRentalCo+"</div>";
		   }
		   return display;
		}
/*		socket.on('gotMessage',function(data){
			//alert(data.msg);
			$('#msg').html($('#msg').html()+'</p>'+data.msg);
			//update UI
		});//*/

	}
};
