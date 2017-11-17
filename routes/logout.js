/**
 * Created by PY Yick on 17-Nov-17.
 */
var express = require('express');
var router = express.Router();
//Passport
//var passport = require("passport-jwt");

/* GET users listing. */
router.get('/', function(req, res, next) {
    //res.redirect('/');
    res.send('logout');
});

module.exports = router;