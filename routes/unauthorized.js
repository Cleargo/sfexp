/**
 * Created by PY Yick on 17-Nov-17.
 */
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('unauthorized', { title: "Unauthorized Access" });
});

module.exports = router;
