var express = require('express');
const res = require('express/lib/response');
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

router.get('/chat', async function (req, res, nexr) {
  const message = await Message.find().sort({ createdAt: -1 }).limit(10).exec();
})
res.render('index');

router.post('/login', (req, res) => {
  req.session.name = req.body.name
  req.redirect('/chat')
})

module.exports = router;
