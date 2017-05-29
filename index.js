const express = require('express');
const path = require('path');
const db = require('./config/db');
const bodyParser = require('body-parser');
const routes = require('./server/routes/appRoutes');
const port = process.env.PORT || 3000;

const app = express();

app.use(express.static('public'));

// Parsers for POST data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Point static path to dist
app.use(express.static(path.join(__dirname, 'public/dist')));

// Set our api routes
app.use('/app', routes);

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/dist/index.html'));
});

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port, function() {
  console.log('todo list RESTful API server started on: ' + port);
});