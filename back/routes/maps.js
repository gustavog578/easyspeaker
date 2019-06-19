const router = require('express').Router();
const MapsCtrl = require('../controllers/maps.controller');

//router.get('/', MapsCtrl.getLanguages);

router.post('/', MapsCtrl.searchByArea);

router.post('/', MapsCtrl.searchByLanguage);

/*router.get('/:id', LanguageCtrl.getLanguage);

router.put('/:id', LanguageCtrl.editLanguage);

router.delete('/:id', LanguageCtrl.deleteLanguage);

*/
module.exports = router;