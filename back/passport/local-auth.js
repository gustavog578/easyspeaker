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

passport.use('local-signup', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, async (req, email, password, done) => {
    const user = await UserModel.findOne({ 'email': email })
    
    if (user) {
        return done(null, false, req.flash('signupMessage', 'The Email is already Taken.'));
    } else {
        const newUser = new UserModel();
        newUser.email = email;
        newUser.password = await newUser.encryptPassword(password);
        await newUser.save();
        done(null, newUser);
    }
}));

passport.use('local-signin', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, async (req, email, password, done) => {
    
    const user = await UserModel.findOne({ email: email });

    if (!user) {
        return done(null, false, req.flash('signinMessage', 'No User Found'));
    }

    console.log(user);    
       
    if (!user.comparePassword(password)) {        
        return done(null, false, req.flash('signinMessage', 'Incorrect Password'));
    }
    
    return done(null, user);
    
}));