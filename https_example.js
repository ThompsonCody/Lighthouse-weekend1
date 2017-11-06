const https = require('https');

console.log("I did it!"); // run first

var options = {
  host: 'stream-large-file.herokuapp.com',
  path: '/give-me-stuff-now'
};



// MAIN HTTP "RESPONSE HANDLER" CALLBACK FUNC
var callback = function(response){

  console.log('In response handler callback');

  // let responseString = '';

  response.on('data', (chunk) => {
    console.log('[-- Chunk of Length ' + chunk.length + ' --]');
    // responseString += chunk; //so, this sets the responseString var to whatever chunk returns, and resets each call?
    console.log('data chunk: ', chunk.toString());
  });

  // response.on('end', () => {
  //   const responseBodyObject = JSON.parse(responseString);
  //   console.log('Response: ', responseBodyObject);
  // });

}

console.log("i'm about to make the request"); // runs second

https.request(options, callback).end(); //runs fourth, goes fifth into callback anon func -> returns log

console.log("i've made the request"); // runs third