const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const UserModel = require('../models/user');

passport.serializeUser((user, done) => {
    done(null, user.id);
});


passport.deserializeUser(async (id, done) => {
    const user = await UserModel.findById(id);
    done(null, user);
});


/*
passport.use('local-signup', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, async (req, email, password, done) => {

     await UserModel.findOne({ 'email': email },
     async (err, user) => {
         console.log(user);
         console.log(err);
        if (err) { return done( null, false, req.flash('signupMessage', 'An eror has ocurred.')); }
        if (user) { return done(null, false, req.flash('signupMessage', 'The Email is already Taken.')); }
        if(!user){
            
            const newUser = new UserModel();
            newUser.email = email;
            newUser.password = await newUser.encryptPassword(password);
            newUser.username = req.body.name;
            newUser.lastname = req.body.lastname;
            newUser.user_type = req.body.user_type;
            newUser.genre =     req.body.genre;
            
            await newUser.save();
            done(null, newUser);
        }

    })*/
    
   // console.log(user);

   /* if (user) {
        return done(null, false, req.flash('signupMessage', 'The Email is already Taken.'));
    } else {
        const newUser = new UserModel();
        newUser.email = email;
        newUser.password = await newUser.encryptPassword(password);
        newUser.username = req.body.name;
        newUser.lastname = req.body.lastname;
        newUser.user_type = req.body.user_type;
        newUser.genre =     req.body.genre;
        
        await newUser.save();
        done(null, newUser);
    }
})); */

passport.use('local-signin', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, async (req, email, password, done) => {
    
    const user = await UserModel.findOne({ email: email });

    console.log("found user :", user)

    if (!user) {
        return done(null, false, req.flash('signinMessage', 'No User Found'));
    }   
       
    if (!user.comparePassword(password)) {        
        return done(null, false, req.flash('signinMessage', 'Incorrect Password'));
    }
    
    return done(null, user);
    
}));