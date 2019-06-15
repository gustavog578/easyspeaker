const router = require('express').Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
//const UserCtrl = require('../controllers/user.controller')

/*
router.get('/signup', (req, res, next) => {
    console.log("signup");
    //res.render('signup');
    res.send('signup');
});*/
/*
router.post('/signup', (req, res, next)=>{
    var params = req.query;
    console.log(params);
    res.json({param : params})
});*/

router.post('/signup', passport.authenticate('local-signup', {
    successRedirect: 'localhost/profile',
    failureRedirect: '/signup',
    failureFlash: true
}));

/*
router.post('/login', passport.authenticate('local-signin'), function (req, res) {
        
    }
);*/
router.post('/login', function (req, res, next) {

    passport.authenticate('local-signin', { session: false }, (err, user, info) => {
        console.log(err);
        if (err || !user) {
            return res.status(400).json({
                message: info ? info.message : 'Login failed',
                user: user
            });
        }

        req.login(user, { session: false }, (err) => {
            if (err) {
                res.send(err);
            }

            const access_token = jwt.sign({ _id: this._id },
                'SECRET1234',
                {
                    expiresIn: '2m'
                });
            return res.json({ user, access_token });
        });
    })
        (req, res);

});

/*
router.get('/profile', isAuthenticated, (req, res, next) => {
    res.render('profile');
});*/

router.get('/logout', (req, res, next) => {
    req.logout();
    res.redirect('/');
});


function isAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }

    res.redirect('/')
}

module.exports = router;