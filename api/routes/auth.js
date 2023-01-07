const express = require("express");
const router = express.Router();
const { login } = require("../controllers/auth/login");
const { logout } = require("../controllers/auth/logout");

router.post("/v1/auth/login", login);
router.delete("/v1/auth/logout", logout);

module.exports = router;
