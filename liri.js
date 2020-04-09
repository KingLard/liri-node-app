var axios = require("axios");
require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);



 var APIchoice = process.argv[2];
 var option = process.argv[3];
 var queryURL = "http://www.omdbapi.com/?i=tt3896198&apikey=cf6fa77d&t=" + option;



 if (APIchoice === "spotify-this-song") {

    var spotify = new Spotify({
        id: spotify.credentials.id,
        secret: spotify.credentials.secret
      });
       spotify.search({ type: 'track', query: option, limit: 1 }, function(err, data) {
         if (err) {
           return console.log('Error occurred: ' + err);
         }
       console.log(data.tracks.items); 
       var artist = data.tracks.items[0].artists[0].name;
       var songName = data.tracks.items[0].name;
       var albumName = data.tracks.items[0].album.name;
       var preview = data.tracks.items[0].preview_url;

       


    //    Artist(s)

    //  * The song's name

    //  * A preview link of the song from Spotify

    //  * The album that the song is from
       });
 }





 else if (APIchoice === "movie-this") {
    axios
  .get(queryURL)
  .then(function(response) {

    var title = response.data.Title;
    var year = response.data.Year;
    var rating = response.data.imdbRating;
    var rottenRating = response.data.Ratings[1];
    var country = response.data.Country;
    var language = response.data.Language;
    var plot = response.data.Plot;
    var actors = response.data.Actors

    console.log(rottenRating);


    // Title of the movie.
    // * Year the movie came out.
    // * IMDB Rating of the movie.
    // * Rotten Tomatoes Rating of the movie.
    // * Country where the movie was produced.
    // * Language of the movie.
    // * Plot of the movie.
    // * Actors in the movie.
   

  });
 }


 



  //omdb api call
  

