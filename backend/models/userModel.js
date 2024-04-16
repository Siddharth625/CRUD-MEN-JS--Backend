const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username: { 
        type: String, 
        required: [true, "Please provide your name"] 
    },
    email: { 
        type: String, 
        required: [true, "Please provide your email"],
        unique: [true, "This email is already in use"]
    }, 
    password: { 
        type: String, 
        required: [true, "Please provide your phone"] 
    }
},
{ 
    timestamps: true 
});

module.exports = mongoose.model('User', userSchema);