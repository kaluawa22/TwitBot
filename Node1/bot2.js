console.log('The bot is running');

var Twit = require('twit'); //Imports the TWIT

var config = require('./config');

//console.log(config); //Prints contents of config file.
var T = new Twit(config);


var r = Math.floor(Math.random()*100); //Random number, no decimals


var stream = T.stream('user'); //Setting up a user stream 

stream.on('follow', followed); //Anytime someone follows me 

function followed(eventMsg) {
	var name = eventMsg.source.name;
	var screenName = eventMsg.source.screen_name;

	tweetItNow('@' + screenName + ' do you like rainbows?');
}













tweetIt();
setInterval(tweetIt, 1000*40); //Sets time intervel to run Tweet it Function 




function tweetIt(){
	var tweet = {
	status: "This is a random number " + r + " #codingrainbow from node.js"
	}

	T.post('statuses/update', tweet, tweeted);

	function tweeted(err, data, response) {
		if(err) {
			console.log("Something went wrong!!");
		}
		else {
			console.log("It worked! This is your tweet: ", tweet);
		}
	}
}


