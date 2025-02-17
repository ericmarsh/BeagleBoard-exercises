#!/usr/bin/env node
// From https://www.npmjs.com/package/twitter
// See hhttps://dev.twitter.com/rest/public
// to see what you can request

var Twitter = require('twitter');

var client = new Twitter({
    consumer_key: process.env.API_KEY,
    consumer_secret: process.env.API_SECRET,
    access_token_key: process.env.TOKEN,
    access_token_secret: process.env.TOKEN_SECRET,
    });

// console.log(client);

// client.get('favorites/list', function(error, params, response) {
//     // console.log(error);
//     if(error) throw error;
//     console.log(params);  // The favorites.
//     console.log(response);  // Raw response object.
// });

// Get my timeline
// client.get('statuses/home_timeline', function(error, params, response) {
//     // console.log(error);
//     if(error) throw error;
//     console.log(params);  // The favorites.
//     // console.log(response);  // Raw response object.
// });

// Get timeline for a given user
var opts = {screen_name: 'MarkAYoder', count: 1};
client.get('statuses/user_timeline', opts,  function(error, params, response) {
    // console.log(error);
    if(error) throw error;
    // console.log(params);  // Tweet body
    console.log(params[0].created_at);   // Text only
    console.log(params[0].text);   // Text only
});