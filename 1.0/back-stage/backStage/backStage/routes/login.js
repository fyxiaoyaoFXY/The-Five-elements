var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('login');
});

router.post('/add', function(req, res, next) {
  // console.log(req.body);
  var title = req.body.title;
  var content = req.body.content;
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("insert into chapters(title,content) values(?,?)",[title,content],function(err,result){
    if(err){
      console.log(err);
    } else {
      console.log(result);
      res.end("insert success");
    }
  })
});

router.get("/list",function(req,res,next){
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("select * from chapters",function(err,result){
    if(err){
      console.log(err);
    } else {
      // console.log(result);
      res.render("list",{chapterList:result});
    }
  })
});

router.get("/del",function(req,res,next){
  var chapterId = req.query.chapterid;
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("delete from chapters where chapterid=?",[chapterId],function(err,result){
    if(err){
      console.log(err);
    } else {
      console.log('delete success');
    }
  })
})
module.exports = router;
