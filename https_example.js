const https = require('https');

console.log("I did it!"); // run first

var options = {
  host: 'www.example.org',
  path: '/'
};

var callback = function(response){
  console.log('In response handler callback');
  console.log('Response: ', response);
}

console.log("i'm about to make the request"); // runs second

https.request(options, callback).end(); //runs fourth, goes fifth into callback anon func -> returns log

console.log("i've made the request"); // runs third