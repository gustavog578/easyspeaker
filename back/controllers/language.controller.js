const Language = require('../models/language');
const bcrypt = require('bcrypt-nodejs');
const languageCtrl = {};

languageCtrl.getLanguages = async (req, res, next) => {
    const languages = await Language.find({});
    res.json(languages);
};
/*
languageCtrl.createTeacher = async (req, res, next) => {
    let password = bcrypt(req.body.password);
    const teacher = new Teacher({
        name: req.body.name,
        email: req.body.email,
        password: password
    });
    await teacher.save();
    res.json({ status: 'Teacher created' });
};

languageCtrl.getTeacher = async (req, res, next) => {
    const { id } = req.params;
    const teacher = await Teacher.findById(id);
    res.json(teacher);
};

languageCtrl.editTeacher = async (req, res, next) => {
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

languageCtrl.deleteTeacher = async (req, res, next) => {
    await Teacher.findByIdAndRemove(req.params.id);
    res.json({ status: 'Teacher Deleted' });
};*/
module.exports = languageCtrl;