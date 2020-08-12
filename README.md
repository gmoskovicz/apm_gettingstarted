# Getting started with Elastic APM

## First, create your Elastic Cloud Cluster 

Go to Elastic Cloud (https://cloud.elastic.co and create an account and a deployment

![Elastic Cloud](https://github.com/gmoskovicz/apm_gettingstarted/blob/master/cloud.png?raw=true)

Make sure you select the Hot/Warm template, which includes APM and is ready for Observability

## Go to tutorial and learn

Then go to the tutorial and select the language you want to use. That is under `/app/kibana#/home/tutorial/apm` in Kibana

![Elastic Tutorial](https://github.com/gmoskovicz/apm_gettingstarted/blob/master/tutorial.png?raw=true)

## Sample Code

Download the sample code at https://raw.githubusercontent.com/gmoskovicz/apm_gettingstarted/master/main.js which includes a sample NodeJs application with the APM Agent configured.

```
var apm = require('elastic-apm-node').start({
  // Override service name from package.json
  // Allowed characters: a-z, A-Z, 0-9, -, _, and space
  serviceName: 'mysampleapp',

  // Use if APM Server requires a token
  secretToken: 'xxxxx',

  // Set custom APM Server URL (default: http://localhost:8200)
  serverUrl: 'https://xxxx.apm.us-east-1.aws.cloud.es.io:xxxx'
})
```

Run the application by running in your console `node main.js`

## Go back to Kibana and check the traces

Now you can go to APM where the magic begins
