//package installs ------------------

var axios = require("axios");
require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var fs = require("fs");



//global variables ----------------------------------------------------------------

 var APIchoice = process.argv[2];
 var option = process.argv[3];
 


 //spotify api function -----------------------------------------------------------
 function spotifyAPI(option) {
  var spotify = new Spotify({
    id: keys.spotify.id,
    secret: keys.spotify.secret
  });
   spotify.search({ type: 'track', query: option, limit: 1 }, function(err, data) {
     if (err) {
       return console.log('Error occurred: ' + err);
     }
   
   var artist = data.tracks.items[0].artists[0].name;
   var songName = data.tracks.items[0].name;
   var albumName = data.tracks.items[0].album.name;
   var preview = data.tracks.items[0].preview_url;

   console.log("Artist: " + artist + "\nSong Name: " + songName + "\nAlbum: " + albumName + "\nSong Preview: " + preview)

   });
}


// movie api function ---------------------------------------------------------------


function movieAPI(option) {
  var queryURL = "http://www.omdbapi.com/?i=tt3896198&apikey=cf6fa77d&t=" + option;

axios
.get(queryURL)
.then(function(response) {

  

  var title = response.data.Title;
  var year = response.data.Year;
  var rating = response.data.imdbRating;
  var rottenRating = response.data.Ratings[1].Value;
  var country = response.data.Country;
  var language = response.data.Language;
  var plot = response.data.Plot;
  var actors = response.data.Actors


  console.log("Movie Title: " + title + "\nRelease Year: " + year + "\nIMDB Rating: " + rating + "\nRotten Tomatoes Rating: " + rottenRating + "\nCountry: " + country +
  "\nLanguages: " + language + "\nPlot: " + plot + "\nActors: " + actors);
});
}









//do what it says choice -----------------------------------------------
 

if (APIchoice === "do-what-it-says") {
  // Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
fs.readFile("random.txt", "UTF8", function(error, data) {
  if (error) {
      return console.log("error");
  } else {
    var random = data;
    var res = random.split(",");
    var APIchoice = res[0];
    var option = res[1];

    if (APIchoice === "spotify-this-song") {
      spotifyAPI(option);
    } 
    else if (APIchoice === "movie-this") {
      movieAPI(option);
    }

    
  }
})

}



else if (APIchoice === "spotify-this-song") {
  if (!option) {
    spotifyAPI("The Sign");
  } else {
    spotifyAPI(option);
  }
 }
    

//movie api ------------------------------------------------------


 else if (APIchoice === "movie-this") {
  if (!option) {
    movieAPI("Mr. Nobody")
  } else {
    movieAPI(option);
  }
  

 }


  

