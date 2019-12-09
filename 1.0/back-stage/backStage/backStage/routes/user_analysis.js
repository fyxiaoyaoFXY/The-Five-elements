var express = require('express');
var router = express.Router();
var mysql = require("mysql");
var dbconfig = require("../config/dbconfig.json");

router.get('/', function (req,res,next) {
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("select time from user", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      var today = 1;
      var yesterday = 1;
      var seven = 1;
      var fifteen = 1;
      var thirty = 1;
      var now = new Date();
      for (let index = 0; index < result.length; index++) {
        var date = new Date(result[index].time.replace(/-/g, "/"));
        var days = now.getTime() - date.getTime();
        var day = parseInt(days / (1000 * 60 * 60 * 24));
        console.log(day);
        if(day == 0){
          today++;
        }else if(day == 1){
          yesterday++;
        }else if(day >= 2 && day <= 7){
          seven++;
        }else if(day > 7 && day <= 15){
          fifteen++;
        }else if(day > 15 && day <= 30){
          thirty++
        }
      }
      console.log(seven)
      res.render('user_analysis', {
        today: today - 1,
        yesterday: yesterday - 1,
        seven: seven - 1,
        fifteen: fifteen - 1,
        thirty: thirty - 1,
      });
    }
  })
});

router.post('/date', (req, res,next) => {
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("select time from user", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      var num = 1;
      var all = 1;
      var bDate = req.body.date;
      var lDate = new Date(bDate);
      for (let index = 0; index < result.length; index++) {
        var date = new Date(result[index].time.replace(/-/g, "/"));
        var days = lDate.getTime() - date.getTime();
        var day = Math.floor(days / (1000 * 60 * 60 * 24));
        if (day == 0) {
          num++;
        }
        if(day >= 0){
          all++;
        }
      }
      num = num - 1;
      all = all-1;
      var numStr = num.toString();
      var allStr = all.toString();
      
      res.send({
        numStr:numStr,
        allStr:allStr
      });
    }
  })
})

module.exports = router;
