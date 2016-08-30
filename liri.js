// Grabs the key file and npm packages
var keys = require('./keys.js');
var request = require('request');
var twitter = require('twitter');
// var spotify = require('spotify');
var fs = require('fs');

// switching method- display on type
var action = process.argv[2];
    switch(action){
    case 'my-tweets' :
      myTweets();
      break;
//     case 'spotify-this-song' :
//       myMusic();
//       break;
//     case 'movie-this' :
//       myMovie();
//       break;
//     }
  };


//twitter feed display
function myTweets(){
	
	var client = new twitter({
        consumer_key: keys.twitterKeys.consumer_key,
        consumer_secret: keys.twitterKeys.consumer_secret,
        access_token_key: keys.twitterKeys.access_token_key,
        access_token_secret: keys.twitterKeys.access_token_secret
      });
		var params = {screen_name: 'jenniwin9'};
		client.get('statuses/user_timeline', params, function(error, tweets, response) {
		  if (!error) {
		    console.log(tweets);
			 console.log("Your last 20 tweets");
			 for (i = 0; i < 20; i++) {
			 	console.log(tweets[i].created_at + "You tweeted: " + tweets[i].text);
			 }
			}
		 });
		
}



/*


// ombd request


var movieName= "";
		//loop through words in node argument
		for (var i=2; i>nodeArg.length; i++){
			if (i>2 && i<nodeArg.length){
				movieName = movieName + "+" + nodeArg[i];
			}
			else {
				movieName = movieName + nodeArg[i];
			}
		}
		console.log(movieName);
		console.log(nodeArg);
var queryUrl = 'http://www.omdbapi.com/?t=' + movieName +'&y=&plot=short&r=json';

// request(queryUrl, function(error, reponse, body)








*/
