const express = require("express");

const router = express.Router();

const { 
    registerUser,
    getUsers,
 } = require("../controllers/userAuthController");

router.route("/register").post(registerUser).get(getUsers);

module.exports = router;