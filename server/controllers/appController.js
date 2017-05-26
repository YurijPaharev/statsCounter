'use strict';
let factoryCount = require('../../lib/factory');

module.exports.return_view = function(req, res) {
  res.send({
    view: 'index.html'
  });
};

module.exports.get_results = function(req, res) {
  res.send({
    result: factoryCount
  });
};

module.exports.give_text = function(req, res) {
  res.send({
    result: 'text'
  });
};