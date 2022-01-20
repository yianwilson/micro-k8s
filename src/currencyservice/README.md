### Debug instructions

#### Set environment vars:

```sh
export PORT=8080
export GOOGLE_CLOUD_PROJECT=<YOUR GCP PROJECT>
export GOOGLE_APPLICATION_CREDENTIALS=<PATH_TO_SERVICE_ACC_KEY_FILE>
```

#### Update the following variables at the top of `server.js`

```sh
var projectId = 'YOUR_PROJECT';
var saKeyFilePath = 'PATH_TO_SERVICE_ACC_KEY_FILE';
var debugVersion = 'UNIQUE_IDENTIFIER_FOR_THE_PROFILER';
```

#### Run the server

```sh
node server.js
```

#### Run the test client

```sh
node testClient.js
```

Tweak the client and server for more testing