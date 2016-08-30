// Grabs the key file and npm packages
var keys = require('./keys.js');
var request = require('request');
var twitter = require('twitter');
// var spotify = require('spotify');
var fs = require('fs');
var parameters = process.argv.slice(3);

// switching method- display on type
var action = process.argv[2];
    switch(action){
    case 'my-tweets' :
      myTweets();
      break;
//     case 'spotify-this-song' :
//       myMusic();
//       break;
    case 'movie-this' :
      myMovie();
      break;
  };


//twitter feed display
function myTweets(){
	// calling my keys from keys.js
	var client = new twitter({
		consumer_key: keys.twitterKeys.consumer_key,
		consumer_secret: keys.twitterKeys.consumer_secret,
		access_token_key: keys.twitterKeys.access_token_key,
		access_token_secret: keys.twitterKeys.access_token_secret
	});
	// getting info from my twitter
	var params = {screen_name: 'jenniwin9'};
	// getting my timeline statuses
	client.get('statuses/user_timeline', params, function(error, tweets, response) {
		if (!error) {
			console.log(tweets);
			console.log("Your last 20 tweets");
			// looping my latest 20 tweets
			for (i = 0; i < 20; i++) {
				console.log(tweets[i].created_at + "You tweeted: " + tweets[i].text);
			}
		}
	});	
}


// ombd request

function myMovie(){
	// if no input auto display to mr nobody
	if (process.argv[3] != '' && process.argv[3] != null){
		movieTitle = process.argv[3].trim();
	}
	else {
		movieTitle = 'Mr.+Nobody';
	}
	
	var movieSearch;
	var movieUrl = 'http://www.omdbapi.com/?t=' + movieTitle +'&tomatoes=true&y=&plot=short&r=json';

		request(movieUrl, function(error, response, body) {
			if (!error && response.statusCode === 200) {
				movieSearch = JSON.parse(body);

				console.log("The Title is: " + movieSearch.Title);
				console.log("The Year is: " + movieSearch.Year);
				console.log("The imdbRating is: " + movieSearch.imdbRating);
				console.log("The Country is: " + movieSearch.Country);
				console.log("The Language is: " + movieSearch.Language);
				console.log("The Plot is: " + movieSearch.Plot);
				console.log("The Actors are: " + movieSearch.Actors);
				console.log("The Rotton Tomatoes Rating is: " + movieSearch.tomatoRating);
				console.log("The Rotton Tomatoes url is: " + movieSearch.tomatoURL);
			}
		});

}







