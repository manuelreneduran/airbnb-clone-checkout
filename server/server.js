
var cluster = require('cluster');

if (cluster.isMaster) {
  var cpuCount = require('os').cpus().length;
  for (var i = 0; i < cpuCount; i += 1) {
    cluster.fork();
  }

} else {

  const express = require('express');
  const morgan = require('morgan');
  const bodyParser = require("body-parser");
  const path = require('path');
  const app = express();
  const port = process.env.PORT || 3002;
  const cors = require('cors');



  // Allow CORS
  app.use(cors());

  // Log all 4xx and 5xx responses
  app.use(morgan('dev'));

  // Parse all requests
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));


  // Serve public folder
  app.use(express.static(path.join(__dirname, '../public')));
  app.use('/:id', express.static(path.join(__dirname, '../public')));

  // Listen for requests
  app.listen(port, () => {
    console.log(`server running at: http://localhost:${port}`);
  });

}