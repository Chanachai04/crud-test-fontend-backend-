const express = require("express");
const {register, login, curentUser} = require("../Controllers/auth");
const {auth} = require("../Middleware/auth");
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/current-user", auth, curentUser);
module.exports = router;
