const asyncHandler = require("express-async-handler");
const User =  require("../models/userModel");

const registerUser = asyncHandler( async (req, res) => {
    console.log("Registeration in progress for ", req.body);
    const {username, email, password} = req.body
    if (!username || !email || !password ) {
        res.status(400)
        throw new Error("All fields are mandatory!");
    }
    const userExists = await User.findOne({email})
    if (userExists){
        res.status(400)
        throw new Error("User already exists!");
    }
    const userDetail =  await User.create({ username, email, password });
    res.status(201).json({userDetail});
});

const getUsers = asyncHandler( async (req, res) => {
    const user = await User.find()
    res.status(201).json({user});
});

module.exports = {
    registerUser,
    getUsers
};