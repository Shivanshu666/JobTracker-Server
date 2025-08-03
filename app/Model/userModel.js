const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        trim: true,
    },
    nickName: {
        type: String,
        required: true,
        trim: true,
    },
    userEmail: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    userPassword: {
        type: String,
        required: true,
    },
});

const UserModel = mongoose.model("User11", UserSchema);

module.exports = UserModel;
