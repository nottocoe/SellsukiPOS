var express = require('express');
var router = express.Router();
const request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {

  request('https://akita-examination.s3-ap-southeast-1.amazonaws.com/shiba-book-shop.json', function (error, response, body) {
    console.error('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    var data = JSON.parse(body);
    res.render('index', { title: 'Shiba Book Shop', data: data});
  });

});

module.exports = router;
