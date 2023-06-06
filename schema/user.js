var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema(
    {
        firstName: String,
        lastName: String,
        email: { type: String, required: [true, 'email not found'] },
        password: {type:String,minlength:8},
        role: {type:String,required: [true, 'role not found']},
        verificationCode: String,
        token: String,
        refreshToken: String,
        createdDate: { type: Date, default: Date.now },
        updatedDate: { type: Date, default: Date.now },
        active: { type: Boolean, default: false },
        isDelete: { type: Boolean, default: false },

    },
    {
        collection: 'users',
    }
);

module.exports = {
    UserModel: mongoose.model('users', userSchema),
};
