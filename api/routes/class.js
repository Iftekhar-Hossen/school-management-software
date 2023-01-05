const express = require("express")
const router = express.Router()
const { sessionCheck } = require("../middleware/sessionCheck");
const {isAdmin} = require("../middleware/roleCheck")
const {getClass} = require("../controllers/class/getClass")

router.get("/v1/class", sessionCheck,isAdmin)