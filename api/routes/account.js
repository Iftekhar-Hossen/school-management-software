const express = require("express");
const router = express.Router();

const { sessionCheck } = require("../middleware/sessionCheck");
const { isAdmin } = require("../middleware/roleCheck");

const {postFeeType, getFeesType} = require("../controllers/accounts/feeType")

const {postAccountType, postAccount, getAccount, getAccountType} = require("../controllers/accounts/finance/account")

const {postIncomeHead, postExpenseHead, getExpenseHead, getIncomeHead} = require("../controllers/accounts/finance/head")


router.post("/v1/accounts/fee-type", sessionCheck, isAdmin, postFeeType);
router.get("/v1/accounts/fees-type", sessionCheck, isAdmin, getFeesType);


router.post("/v1/accounts/finance/account", sessionCheck, isAdmin, postAccount)
router.get("/v1/accounts/finance/account", sessionCheck, isAdmin, getAccount)


router.post("/v1/accounts/finance/account-type", sessionCheck, isAdmin, postAccountType)
router.get("/v1/accounts/finance/account-type", sessionCheck, isAdmin, getAccountType)


router.post("/v1/accounts/finance/income-head", sessionCheck, isAdmin, postIncomeHead)
router.post("/v1/accounts/finance/expense-head", sessionCheck, isAdmin, postExpenseHead)

router.get("/v1/accounts/finance/income-head", sessionCheck, isAdmin, getIncomeHead)
router.get("/v1/accounts/finance/expense-head", sessionCheck, isAdmin, getExpenseHead)




module.exports = router