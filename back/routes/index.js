const router = require('express').Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const UserModel = require('../models/user');
//const UserCtrl = require('../controllers/user.controller')


router.post('/signup', function (req, res, next) {
    try {
        addNewUserToDB(req, res);    
    } catch (error) {
        console.log(error)
    }

});
  
  
/*
router.post('/signup', 
    passport.authenticate('local-signup', {
    successRedirect: '/profile',
    failureRedirect: '/signup',
    failureFlash: true
})
);*/


router.post('/login', function (req, res, next) {
    
    passport.authenticate('local-signin', async (err, user, info) => {        
        
        console.log(user)
        console.log(err)
        if (err || !user) {
            return res.status(400).json({
                message: info ? info.message : 'Login failed',
                user: user
            });

        }

        req.login(user, { session: false }, async (err) => {
            
            if (err) { res.send(err); }

            const access_token = jwt.sign({ _id: this._id },
                'SECRET1234',
                {
                    expiresIn: '2m'
                });
            return res.json({ user, access_token });
        });
    })
        (req, res, next);

});


router.get('/profile', isAuthenticated, (req, res, next) => {
    res.render('profile');
});

router.get('/logout', (req, res, next) => {
    req.logout();
    res.redirect('/');
});


function isAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        console.log("Is Autenticate");
        return next();
    }


    res.redirect('/')
}

async function addNewUserToDB(req, res) {
  
    const existUser = await UserModel.findOne({ 'email': req.body.email })
    
    console.log(existUser);

    if(existUser){
 
        return res.status(401).json({
            "email":  'The email is already taken',            
        });
 
    }


    const newUser = new UserModel()
    newUser.email = req.body.email;
    newUser.password = await newUser.encryptPassword(req.body.password);
    newUser.username = req.body.name;
    newUser.lastname = req.body.lastname;
    newUser.user_type = req.body.user_type;
    newUser.genre =     req.body.genre;
    
  
    try {
      const userAdd = await newUser.save();
      console.log(userAdd);
      
      return res.status(201).json(userAdd);
    }
    catch (err) {
      return res.status(501).json(err);
    }
  }

module.exports = router;