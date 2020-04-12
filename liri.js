var axios = require("axios");
require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var fs = require("fs");



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

      //  console.log("Artist: " + this.artist + "\nSong Name: " + this.songName + "\nAlbum: " + this.album + "\nSong Preview: " + this.preview)
       var artist = data.tracks.items[0].artists[0].name;
       var songName = data.tracks.items[0].name;
       var albumName = data.tracks.items[0].album.name;
       var preview = data.tracks.items[0].preview_url;

       console.log("Artist: " + artist + "\nSong Name: " + songName + "\nAlbum: " + albumName + "\nSong Preview: " + preview)

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
  });
 }


 
else if (APIchoice === "do-what-it-says") {
    // Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
fs.readFile("random.txt", utf8, function(error, data) {
    if (error) {
        return console.log("error");
    } else {

    }
})
    //* It should run `spotify-this-song` for "I Want it That Way," as follows the text in `random.txt`.

    // * Edit the text in random.txt to test out the feature for movie-this and concert-this.
}
  

