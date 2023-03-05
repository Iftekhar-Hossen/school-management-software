const IncomeHead = require("../../../models/IncomeHeadModel")
const ExpenseHead = require("../../../models/ExpenseHeadModel")

exports.postIncomeHead = (req, res)=>{
    console.log(req.body)

    new IncomeHead({...req.body}).save().then(()=>{
        res.status(200).send({
            status: true,
            message: "Income head added successfully"
        })
    }).catch((error) => {
        console.log("🚀 ~ file: head.js:11 ~ newIncomeHead ~ error", error)
        
    })
}
exports.postExpenseHead = (req, res)=>{
    console.log(req.body)
    new ExpenseHead({...req.body}).save().then(()=>{
        res.status(200).send({
            status: true,
            message: "Expense head added successfully"
        })
    }).catch((error) => {
        console.log("🚀 ~ file: head.js:11 ~ newIncomeHead ~ error", error)
        
    })
}


exports.getIncomeHead = (req, res)=>{
    IncomeHead.find({}).then((data)=>{
       res.status(200).send({
           status: true,
           message: "Expense head added successfully",
           data
       })
   }).catch((error) => {
       console.log("🚀 ~ file: head.js:11 ~ newIncomeHead ~ error", error)
       
   })
}


exports.getExpenseHead = (req, res)=>{
     ExpenseHead.find({}).then((data)=>{
        res.status(200).send({
            status: true,
            message: "Expense head added successfully",
            data
        })
    }).catch((error) => {
        console.log("🚀 ~ file: head.js:11 ~ newIncomeHead ~ error", error)
        
    })
}

