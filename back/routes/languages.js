const router = require('express').Router();
const LanguageCtrl = require('../controllers/language.controller');

router.get('/', LanguageCtrl.getLanguages);
/*
router.post('/', LanguageCtrl.createLanguage);

router.get('/:id', LanguageCtrl.getLanguage);

router.put('/:id', LanguageCtrl.editLanguage);

router.delete('/:id', LanguageCtrl.deleteLanguage);

*/
module.exports = router;