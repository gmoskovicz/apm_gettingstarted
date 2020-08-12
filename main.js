var apm = require('elastic-apm-node').start({
  // Override service name from package.json
  // Allowed characters: a-z, A-Z, 0-9, -, _, and space
  serviceName: '',

  // Use if APM Server requires a token
  secretToken: 'xxxxxx',

  // Set custom APM Server URL (default: http://localhost:8200)
  serverUrl: 'https://xxxxx.apm.us-east-1.aws.cloud.es.io:xxxxx'
})

var http = require("http");
const { Client } = require('@elastic/elasticsearch');

const client = new Client({
  node: 'https://xxxxx.us-east-1.aws.found.io:xxxxx',
  maxRetries: 5,
  requestTimeout: 60000,
  sniffOnStart: false,
  auth: {
  	username: 'elastic',
  	password: 'xxxxxxx'
  }
});

http.createServer(function (request, response) {


   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   var health = response.writeHead(200, {'Content-Type': 'text/plain'});


   var request = client.cat.health({
	  format: "json"
   }, function (err, result) {
   		response.end("My cloud cluster information: \n \n \n" 
   			+ JSON.stringify(result.body[0], null , 4));
   });


}).listen(8081);

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');
