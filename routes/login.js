/**
 * Created by PY Yick on 17-Nov-17.
 */
var express = require('express');
var router = express.Router();
//Passport
/*var passport = require('passport-jwt');
var JwtStrategy = passport.Strategy,
    ExtractJwt = passport.ExtractJwt;
var opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = '0tE7DmuDk78PH0-mb3JBBNH3wzIHLr-V-KTtBHWK6OvYt0PB9kPtbzBakvvZ3JOQKBpUBCrBk84IXCbhkAqkLQIok_DqU_BgLQNHo_-8uD3ZjQEwpwhWvUtuA0Ik0uaS8GV54MEEldRh6NKzEh4RbdvW9Z_7Y1xiJJ0Gvx-lEjZoy0fovMxxRmYm3hWKhuUjCl9kcZrUWVmBwyd_nqUTLm5FJF_KjWf3QouV7Wx7X-eazExrE69H9zTWhCaFzg2';
opts.issuer = 'https://mc.s7.exacttarget.com';

passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    console.log(jwt_payload);

}));
/*
/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('OK');
});
/*router.post('/', passport.authenticate('jwt', {
    successRedirect: '/',
    successFlash: 'Welcome!',
    failureRedirect: '/unauthorized',
    failureFlash: 'Invalid token.',
    session: false
}), function(req, res, next) {
    res.send('OK');
});*/

module.exports = router;