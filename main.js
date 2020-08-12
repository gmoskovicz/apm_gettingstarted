var apm = require('elastic-apm-node').start({
  // Override service name from package.json
  // Allowed characters: a-z, A-Z, 0-9, -, _, and space
  serviceName: '',

  // Use if APM Server requires a token
  secretToken: 'rwxXuX892i0TmTp67c',

  // Set custom APM Server URL (default: http://localhost:8200)
  serverUrl: 'https://81c3189ed4cf4ce097c211b4c91fed02.apm.us-east-1.aws.cloud.es.io:443'
})

var http = require("http");
const { Client } = require('@elastic/elasticsearch');

const client = new Client({
  node: 'https://1bedcadd6c974e3f963b464dadeb3ab8.us-east-1.aws.found.io:9243',
  maxRetries: 5,
  requestTimeout: 60000,
  sniffOnStart: false,
  auth: {
  	username: 'elastic',
  	password: '0I1BIbjNeK8FI2UxVg3h2b5O'
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