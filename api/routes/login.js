const express = require("express");
const router = express.Router();
const { login } = require("../controllers/auth/login");

router.post("/v1/auth/login", login);

module.exports = router
