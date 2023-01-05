const express = require("express");
const router = express.Router();
const { addAdmin } = require("../controllers/auth/addAdmin");
const { sessionCheck } = require("../middleware/sessionCheck");
const { isAdmin } = require("../middleware/roleCheck");

router.post("/v1/auth/add-admin", sessionCheck, isAdmin, addAdmin);

module.exports = router;
