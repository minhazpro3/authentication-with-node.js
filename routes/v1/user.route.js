const express = require("express");
const authenticate = require("../../controllers/user.controllers");
const router = express.Router();

router.route("/").post(authenticate.register);

module.exports = router;
