const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');
const userSchema = new Schema({
    username: {
        type: String,
        required: 'A username is required'
    },
    email: {
        type: String,
        required: 'email is required',
    },
    password: {
        type: String,
        required: 'A password is requred',
    }
});
// Define Schema methods
userSchema.methods = {
    checkPassword: (inputPassword) => {
        console.log('inputPassword')
        return bcrypt.compareSync(inputPassword, this.password);
    },
    hashPassword: (plainTextPassword) => {
        console.log('plainTextPassword')
        return bcrypt.hashSync(plainTextPassword, 10);
    },
};

// Define hooks for pre-saving
userSchema.pre("save", (next) => {
    if (!this.password) {
        console.log("models/user.js");
        next();
    } else {
        console.log("models/user.js pre save");
        this.password = this.hashPassword(this.password);
        next();
    }
});
const User = mongoose.model('user', userSchema);
module.exports = User;