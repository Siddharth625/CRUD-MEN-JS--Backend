const express = require("express");
const router = express.Router();
const { getDetails,
    postDetails,
    putDetails,
    getDetailID,
    deleteDetails
 } = require("../controllers/contactController");

router.route("/").get(getDetails).post(postDetails);

router.route("/:id").get(getDetailID).put(putDetails).delete(deleteDetails);

module.exports = router;