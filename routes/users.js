var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Welcome To MyAPP API Server' });
});
/* GET users listing. */
// router.get('/user', function(req, res, next) {
//   res.send('respond with a resource');
// });

module.exports = router;
