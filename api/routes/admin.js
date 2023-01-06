const express = require("express");
const router = express.Router();
const { addAdmin } = require("../controllers/admin/addAdmin");
const { sessionCheck } = require("../middleware/sessionCheck");
const { isAdmin } = require("../middleware/roleCheck");
const { adminList} = require("../controllers/admin/adminList")

router.post("/v1/admin/add-admin", sessionCheck, isAdmin, addAdmin);
router.get("/v1/admin/admin-list", sessionCheck, isAdmin, adminList)

module.exports = router;
