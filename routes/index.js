var express = require('express');
var router = express.Router();

var message = require('../models/message.model');

/* GET home page. */
router.get('/', function (req, res, next) {
  message.find().sort({ createdAt: -1 }).limit(10).exec(function (err, messages) {
    if (err) {
      return next(err);
    }
    res.render('index', { title: 'Express', messages: messages });
  });
  res.render('index');
});

module.exports = router;
