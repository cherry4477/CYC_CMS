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
  res.render('content', { title: 'content-href' });
});
router.get('/api-href', function(req, res, next) {
  res.render('api', { title: 'api' });
});
router.get('/field/:name', function(req, res, next) {
  var name=req.params.name;
  res.render('field', { title: 'field' ,name:name});
});
router.get('/contentEdit/:contentTypeId/:contentId/:contentName', function(req, res, next) {
  var contentTypeId=req.params.contentTypeId;
  var contentId=req.params.contentId;
  var contentName=req.params.contentName;
  res.render('contentEdit', { title: 'contentEdit' ,contentTypeId:contentTypeId,contentId:contentId,contentName:contentName});
});






module.exports = router;
