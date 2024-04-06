const asyncHandler = require("express-async-handler");
const Contact =  require("../models/contactModel");

const getDetails = asyncHandler( async (req, res) => {
    const contact = await Contact.find()
    res.status(201).json({contact});
});

const getDetailID = asyncHandler( async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    console.log(contact)
    if (!contact){
        res.status(404)
        throw new Error("Contact  not found!");
    }
    res.status(200).json({contact});
});

const postDetails = asyncHandler( async (req, res) => {
    console.log("The contact is created for information ", req.body);
    const {name, email, contact} = req.body
    if ( !name || !email || !contact ) {
        res.status(400)
        throw new Error("All fields are mandatory!");
    }
    const contactDetail =  await Contact.create({ name, email, contact });
    res.status(201).json({contactDetail});
});

const putDetails = asyncHandler( async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact){
        res.status(404)
        throw new Error("Contact  not found!");
    }
    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id, 
        req.body ,
        {new: true});
    res.status(200).json(updatedContact);
});

const deleteDetails = asyncHandler( async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    console.log(contact);
    if (!contact){
        res.status(404)
        throw new Error("Contact  not found!");
    };
    
    await Contact.findOneAndDelete(req.params.id);
    res.status(200).json(contact);
});

module.exports = {
    getDetails, 
    postDetails, 
    putDetails, 
    getDetailID, 
    deleteDetails
}