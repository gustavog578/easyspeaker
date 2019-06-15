const User = require('../models/user');
const bcrypt = require('bcrypt-nodejs');
const userCtrl = {};

userCtrl.getUsers = async (req, res, next) => {
    const users = await User.find();
    res.json(users);
};

userCtrl.createUser = async (req, res, next) => {
    let password = bcrypt(req.body.password); 
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: password
    });
    await user.save();
    res.json({ status: 'User created' });
};

userCtrl.getUser = async (req, res, next) => {
    const { id } = req.params;
    const users = await User.findById(id);
    res.json(users);
};

userCtrl.editUser = async (req, res, next) => {
    const { id } = req.params;
    const users = {
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary
    };
    await User.findByIdAndUpdate(id, { $set: users }, { new: true });
    res.json({ status: 'User Updated' });
};

userCtrl.deleteUser = async (req, res, next) => {
    await User.findByIdAndRemove(req.params.id);
    res.json({ status: 'User Deleted' });
};


userCtrl.authenticate = async (req, res, next) => {
    // call for passport authentication
   await passport.authenticate('local-signin', (err, user, info) => {
        // error from passport middleware
        if (err) return res.status(400).json(err);
        // registered user
        else if (user) return res.status(200).json({ "token": user.generateJwt() });
        // unknown user or wrong password
        else return res.status(404).json(info);
    })(req, res);
}

userCtrl.userProfile = async (req, res, next) => {
    await User.findOne({ _id: req._id },
        (err, user) => {
            if (!user)
                return res.status(404).json({ status: false, message: 'User record not found.' });
            else
                return res.status(200).json({ status: true, user: _.pick(user, ['fullName', 'email']) });
        }
    );
}


module.exports = userCtrl;