var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var connection = mysql.createConnection({
	host: 'spk-www',
	user: 'gawlikow_1135277',
	password: '70572689xX#',
	database: 'GAWLIKOWSKA'
});

connection.connect(function(err) {
    console.log("Connected!");
    connection.query(sql, function (err, result) {
      if (err) throw err;
      console.log(result);
    });
  });

// router.get('/spis', function(req, res, next) {
//     if (err) throw err;    
//     var sql = 'SELECT rasa FROM kot';
//     connection.query(sql, function (err, result) {
//       if (err) throw err;
//       console.log(result);
//       //res.render('spis', { title:'spis', dane: rows});
//     });
// });

module.exports = router;
