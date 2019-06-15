const router = require('express').Router();
const TeacherCtrl = require('../controllers/teacher.controller');

router.get('/', TeacherCtrl.getTeachers);

router.post('/', TeacherCtrl.createTeacher);

router.get('/:id', TeacherCtrl.getTeacher);

router.put('/:id', TeacherCtrl.editTeacher);

router.delete('/:id', TeacherCtrl.deleteTeacher);


module.exports = router;