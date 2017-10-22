var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/talk', function(req, res, next){
  res.render('dalkom_talk');
})

module.exports = router;
