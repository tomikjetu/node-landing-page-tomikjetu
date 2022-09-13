'use strict';

// [START gae_node_request_example]
const express = require('express');

const app = express();

app.use(express.static(__dirname + "/public"));

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

// Start the server
const PORT = parseInt(process.env.PORT) || 8080;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});

// [END gae_node_request_example]

module.exports = app;
