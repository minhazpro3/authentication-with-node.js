const express = require("express");
const authenticate = require("../../controllers/user.controllers");
const router = express.Router();

router.route("/register").post(authenticate.register);
router.route("/login").post(authenticate.login);

module.exports = router;
