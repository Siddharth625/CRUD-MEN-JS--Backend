const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
    name: { type: String, required: [true, "Please provide your name"] },
    email: { type: String, required: [true, "Please provide your email"] }, 
    contact: { type: String, required: [true, "Please provide your phone"] }
},
{ 
    timestamps: true 
});

module.exports = mongoose.model('Contact', contactSchema);