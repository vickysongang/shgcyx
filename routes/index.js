/**
 * Created by songang on 2018/5/20.
 */
var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  res.render('index', {
    content: 'Hello world!'
  })
})

module.exports = router;