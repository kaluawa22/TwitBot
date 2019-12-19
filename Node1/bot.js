console.log('The bot is running');

var Twit = require('twit'); //Imports the TWIT

var config = require('./config');

//console.log(config); //Prints contents of config file.





var T = new Twit(config);



var params = {
	q: 'Trump', //Query Terms, In this example it is Banana since 2011
	count: 5 // Counts 100 tweets back 
};

T.get('search/tweets', params, gotData); //

function gotData(err, data, response) {       //Prints out the raw text of those tweets
	var tweets = data.statuses;
	for (var i = 0; i < tweets.length; i++) {
		console.log(tweets[i].text);
	}
};