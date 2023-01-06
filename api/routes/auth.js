const express = require("express");
const router = express.Router();
const { login } = require("../controllers/auth/login");
const { logout } = require("../controllers/auth/logout");
const { sessionCheck } = require("../controllers/auth/sessionCheck");

router.post("/v1/auth/login", login);
router.delete("/v1/auth/logout", logout);
router.get("/v1/auth/session-check", sessionCheck);

module.exports = router;
