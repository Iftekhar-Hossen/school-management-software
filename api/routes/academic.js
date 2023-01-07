const express = require("express");
const router = express.Router();
const {
    getSession,
    postSession,
} = require("../controllers/academic/session.js");

const {
    getClass,
    postClass,
} = require("../controllers/academic/class.js");

const { sessionCheck } = require("../middleware/sessionCheck");
const {isAdmin} = require("../middleware/roleCheck")


router.post("/v1/academic/session", sessionCheck, isAdmin, postSession);
router.get("/v1/academic/session", sessionCheck, isAdmin, getSession);

router.post("/v1/academic/class", sessionCheck, isAdmin, postClass);
router.get("/v1/academic/class", sessionCheck, isAdmin, getClass);



module.exports = router;
