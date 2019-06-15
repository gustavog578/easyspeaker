const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
const jwt = require('jsonwebtoken');
const { Schema } = mongoose;

const teacherSchema = new Schema({
    username: String,
    lastname: String,
    user_type: Number,
    email: String,
    native_language: String,
    others_languages: Array
   
});

teacherSchema.methods.encryptPassword = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
};

teacherSchema.methods.comparePassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};

// Custom validation for email
teacherSchema.path('email').validate((val) => {
    emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val);
}, 'Invalid e-mail.');

// Events
teacherSchema.pre('save', function (next) {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(this.password, salt, (err, hash) => {
            this.password = hash;
            this.saltSecret = salt;
            next();
        });
    });
});


// Methods
/*userSchema.methods.verifyPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};*/

teacherSchema.methods.generateJwt = function () {
    console.log(this._id);
    return jwt.sign({ id: this._id }, "SECRET123", { expiresIn: "2m" });
}



module.exports = mongoose.model('teachers', teacherSchema);