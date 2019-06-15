const router = require('express').Router();
const passport = require('passport');
const UserCtrl = require('../controllers/user.controller')

router.get('/', UserCtrl.getUsers);

router.post('/', UserCtrl.createUser);

router.get('/:id', UserCtrl.getUser);

router.put('/:id', UserCtrl.editUser);

router.delete('/:id', UserCtrl.deleteUser);


module.exports = router;