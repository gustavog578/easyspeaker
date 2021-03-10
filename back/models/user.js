const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt  = require('jsonwebtoken');
const { Schema } = mongoose;

const userSchema = new Schema({
    username : String,
    lastname : String,
    user_type : Number,
    email: String,
    password: String
});

userSchema.methods.encryptPassword = (password) => {

    bcrypt.hash(password, 10, function(err, hash) {
        if(err) return err;
        return hash;
    });

    //console.log("encrypt", password);
    //return bcrypt.hash(password, bcrypt.genSaltSync(10));
};

userSchema.methods.comparePassword = async function (password) {
    
    const user = this;
    const compare = await bcrypt.compare(password, user.password);
  
    return compare;
    
    /*password = password.toString();
    return bcrypt.compareSync(password, this.password);*/
};

// Custom validation for email
userSchema.path('email').validate((val) => {
    emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val);
}, 'Invalid e-mail.');

// Events
userSchema.pre(
    'save', 
    async function (next) {
        const user = this;
        const hash = await bcrypt(this.password,10)
        this.password = hash;
        next();
        /*bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(this.password, salt, (err, hash) => {
            this.password = hash;
            this.saltSecret = salt;
          
        });
     });*/
});


// Methods
userSchema.methods.verifyPassword = async function (password) {
    const user = this;
    const compare = await bcrypt.compare(password, user.password);
  
    return compare;
};

userSchema.methods.generateJwt = function () {
    console.log(this._id);
    return jwt.sign({ id: this._id }, "SECRET123", {expiresIn: "2m" });
}



module.exports = mongoose.model('user', userSchema);