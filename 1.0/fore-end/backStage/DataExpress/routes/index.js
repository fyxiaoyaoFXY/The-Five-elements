var express = require('express');
var router = express.Router();
var mysql = require("mysql");
var dbconfig = require("../config/dbconfig.json");

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('goodList', { title: 'EYE&EAR' });
// });
router.post('/login',function(req,res,next) {
  var username = req.body.username;
  var password = req.body.password;
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("select * from user where username = ? and password = ?",[username,password],function(err,result) {
    if(err) {
      console.log(err);
    } else {
      console.log( result);
      res.send(result);
    }
  });
});
router.post('/register',function(req,res,next) {
  var username = req.body.username;
  var password = req.body.password;
  var mobile = req.body.mobile;
  console.log(username);
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("insert into user(username,password,mobile) values(?,?,?)",[username,password,mobile],function(err,result) {
    if(err) {
      console.log(err);
    } else {
      console.log(result);
      res.send('success');
    }
  });
});
router.get('/list',function(req,res,next) {
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("select * from chapters",function(err,result) {
    if(err) {
      console.log(err);
    } else {
      // console.log(result);
      res.render("list.ejs",{chapterList:result});
    }
  });
})
router.get('/del',function(req,res,next) {
  var chapterId = req.query.chapterid;
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("delete from chapters where chapterid=?",[chapterId],function(err,result) {
    if(err) {
      console.log(err);
    } else {
      res.end("delete success");
    }
  })
})
/**
 * update chapters set content-? where chapterid=?
 */
module.exports = router;
