const Maps = require('../models/maps');
const bcrypt = require('bcrypt-nodejs');
const MapsCtrl = {};

MapsCtrl.searchByArea = async (req, res, next) => {

    const teachersInArea = await Maps.find({ lat: req.latitud, lng : req.longitud});
    res.json(teachersInArea);
};

module.exports = languageCtrl;