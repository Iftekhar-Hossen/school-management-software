const express = require("express");
const router = express.Router();
const {
    getSession,
    postSession,
} = require("../controllers/academic/session.js");

const {
    postStudent,
    getStudentList,
    getStudent,
} = require("../controllers/academic/student");
const { getClass, postClass } = require("../controllers/academic/class.js");
const { getSubject, postSubject } = require("../controllers/academic/subject");

const { sessionCheck } = require("../middleware/sessionCheck");
const { isAdmin } = require("../middleware/roleCheck");

router.post("/v1/academic/session", sessionCheck, isAdmin, postSession);
router.get("/v1/academic/session", sessionCheck, isAdmin, getSession);

router.post("/v1/academic/class", sessionCheck, isAdmin, postClass);
router.get("/v1/academic/class", sessionCheck, isAdmin, getClass);

router.post("/v1/academic/subject", sessionCheck, isAdmin, postSubject);
router.get("/v1/academic/subject", sessionCheck, isAdmin, getSubject);

router.post("/v1/academic/student", sessionCheck, isAdmin, postStudent);
router.get("/v1/academic/student-list", sessionCheck, isAdmin, getStudentList);
router.get("/v1/academic/student", sessionCheck, isAdmin, getStudent);

module.exports = router;
