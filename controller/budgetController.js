'use strict';

var mongoose = require('mongoose');
require('../model/budgetModel');
var Budget = mongoose.model('Budget');

exports.budgets = function(req, res) {
  Budget.find({}, function(err, budget) {
    if (err)
      res.send(err);
    res.json(budget);
  });
};

exports.add = function(req, res) {
  var new_budget = new Budget(req.body);
  new_budget.save(function(err, budget) {
    if (err)
      res.send(err);
    res.json(budget);
  });
};

