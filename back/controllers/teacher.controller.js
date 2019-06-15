const Teacher = require('../models/teacher');
const bcrypt = require('bcrypt-nodejs');
const teacherCtrl = {};

teacherCtrl.getTeachers = async (req, res, next) => {
    const teachers = await Teacher.find({}, { "email": 1, "username": 2, "lastname": 3, "user_type": 4, "native_language": 5, "others_languages": 6  });
    res.json(teachers);
};

teacherCtrl.createTeacher = async (req, res, next) => {
    let password = bcrypt(req.body.password);
    const teacher = new Teacher({
        name: req.body.name,
        email: req.body.email,
        password: password
    });
    await teacher.save();
    res.json({ status: 'Teacher created' });
};

teacherCtrl.getTeacher = async (req, res, next) => {
    const { id } = req.params;
    const teacher = await Teacher.findById(id);
    res.json(teacher);
};

teacherCtrl.editTeacher = async (req, res, next) => {
    const { id } = req.params;
    const users = {
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary
    };
    await Teacher.findByIdAndUpdate(id, { $set: users }, { new: true });
    res.json({ status: 'Teacher Updated' });
};

teacherCtrl.deleteTeacher = async (req, res, next) => {
    await Teacher.findByIdAndRemove(req.params.id);
    res.json({ status: 'Teacher Deleted' });
};

/*
teacherCtrl.authenticate = async (req, res, next) => {
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
*/
/*
teacherCtrl.userProfile = async (req, res, next) => {
    await User.findOne({ _id: req._id },
        (err, user) => {
            if (!user)
                return res.status(404).json({ status: false, message: 'User record not found.' });
            else
                return res.status(200).json({ status: true, user: _.pick(user, ['fullName', 'email']) });
        }
    );
}
*/

module.exports = teacherCtrl;