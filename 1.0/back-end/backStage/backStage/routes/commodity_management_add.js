var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('commodity_management_add'); 
});

module.exports = router;
