const mongoose = require('mongoose');
const { Schema } = mongoose;

const languageSchema = new Schema({
    name: String
});

module.exports = mongoose.model('languages', languageSchema);