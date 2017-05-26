const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./server/routes/appRoutes');
const port = process.env.PORT || 3000;

const app = express();

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/app', routes);

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port, function() {
  console.log('todo list RESTful API server started on: ' + port);
});