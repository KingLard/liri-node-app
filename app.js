var axios = require("axios");
var Spotify = require('node-spotify-api');

var userInput = process.argv[2];

var queryURL = "http://www.omdbapi.com/?i=tt3896198&apikey=cf6fa77d&t=" + userInput;


//  spotify api call 
// var spotify = new Spotify({
//   id: "0cab47e8c91d46ecbcdd216d810100e9",
//   secret: "3f7aa9602b764a6bb6f5020139226e41"
// });
 
 spotify.search({ type: 'track', query: userInput, limit: 1 }, function(err, data) {
   if (err) {
     return console.log('Error occurred: ' + err);
   }

 console.log(JSON.stringify(data)); 
 });



//omdb api call

axios
.get(queryURL)
.then(function(response) {
   
        var title = response.data.Title;
        var year = response.data.Year;
        var rating = response.data.Rating;
        var runtime = response.data.Runtime;
       
  
   
});