const mongoose = require("mongoose");
const bcrypt = require('bcryptjs')
const {Schema} = mongoose;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    passwordHash: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false, 
    },
    apartment: {
        type: String,
        default: ''
    },
    zipcode: {
        type: String,
        default: ''
    },
    street: {
        type: String,
        default: ''
    },
    city: {
        type: String,
        default: ''
    },
    country: {
        type: String,
        default: ''
    },
    tokens:[{
        token:{
            type: String,
            required: true
            }
    }]
});

userSchema.virtual('id').get(function(){
    return this._id.toHexString()
})

userSchema.set('toJSON',{
    virtuals:true
})

userSchema.statics.findByCredentials = async (email, password) => {
    const user = await User.findOne({ email })

    if (!user) {
        throw new Error('Unable to login')
    } 
    
    const isMatch = await bcrypt.compare(password, user.passwordHash)

    if (!isMatch) {
        throw new Error('Unable to login')
    }

    return user
}

const User = mongoose.model("user", userSchema)
module.exports = User