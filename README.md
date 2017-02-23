## Demo for socket.io

### Running this app

Assuming you have nodejs setup

  * If you are running for the first time , `npm install` 

  * To run the app, `npm start`

### Testing the app

  * open the url `http://<hostname>:8080`

  * prepare a payload in json format

  ```
  { 
    "traveller": "Jim",  
    "flightReq" : 
     { "flightFrom": "GRU",
       "flightTo": "SCL",
       "flightDate": "2017-02-28",
       "flightPassengers": 5,
       "flightNo": "TA12" },
    "hotelReq": 
     { "hotelArrivalDate": "2017-02-28",
       "hotelNights": 50,
       "hotelCity": "SCL",
       "hotelId": "SheratonSantiago" },
    "carReq": 
     { "carCity": "SCL",
       "carRentalCo": "Hertz",
       "carType": "Econ",
       "carStartDate": "2017-02-28",
       "carDays": 50 } 
  }

```


  * fire the command 

  `curl -X POST -H "Content-Type: application/json" -d @mypayload.json http://<host>:8080/events`

  You should see some text being displayed on the browser
