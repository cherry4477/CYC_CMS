var express = require('express');
var router = express.Router();


router.all('/secret', function (req, res, next) {
  console.log('Accessing the secret section ...');
  next(); // pass control to the next handler
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'index' });
});
router.get('/index', function(req, res, next) {
  res.render('index', { title: 'index' });
});
router.get('/model-href', function(req, res, next) {
  res.render('content-model', { title: 'content-model' });
});
router.get('/content-href', function(req, res, next) {
  res.render('index', { title: 'content-href' });
});
router.get('/api-href', function(req, res, next) {
  res.render('index', { title: 'api' });
});
router.get('/field/:name', function(req, res, next) {
  var name=req.params.name;
  res.render('field', { title: 'field' ,name:name});
});






module.exports = router;
