var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var db = req.con;

  db.query("SELECT 5 + 2 AS solution", function (err, rows, fields) {
    var answer = rows[0].solution;
    res.render('index', { title: 'Express', answer: answer});
  });
});

module.exports = router;
