const express = require("express");
const { sendEmailController } = require("../controller/portfolio.controller");

// router object
const router = express.Router();

// routes
router.post("/sendEmail", sendEmailController);

module.exports = router;