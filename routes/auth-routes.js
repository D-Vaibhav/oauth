const router= require('express').Router();
const passport= require('passport');

// passed from the localhost:/auth/
router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/logout', (req, res) => {
    res.send('logged out');
});

// for google sign-in
router.get('/google', passport.authenticate('google', { scope: ['profile'] }));

// , passport.authenticate('google') to be added as second parameter
router.get('/google/redirect', (req, res) => {
    res.send('redirected to fire callback function');
});

module.exports= router;