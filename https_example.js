const https = require('https');

// console.log("I did it!"); // run first

var options = {
  host: 'stream-large-file.herokuapp.com',
  path: '/give-me-stuff-now'
};

// var callback = (response) => {

//   console.log('In response handler callback');

//   response.on('data', (chunk) => {
//     console.log(`[-- CHUNK OF LENGTH ${chunk.length} --]`)
//     // responseString += chunk; //so, this sets the responseString var to whatever chunk returns, and resets each call?
//     console.log('data chunk: ', chunk.toString());
//   });

// }

console.log("i'm about to make the request"); // runs second

https.request(options, (response) => {

  console.log('In response handler callback');

  response.on('data', (chunk) => {
    console.log(`[-- CHUNK OF LENGTH ${chunk.length} --]`)
    console.log('data chunk: ', chunk.toString());
  });

}).end();

console.log("i've made the request");