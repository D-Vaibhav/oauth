const router= require('express').Router();

// passed from the localhost:/auth/
router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/logout', (req, res) => {
    res.send('logged out');
});

module.exports= router;