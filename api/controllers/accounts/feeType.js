const FeeType = require("../../models/feeTypeModel")
const {response} = require("../../utils/responseGenerator")

exports.postFeeType = (req, res)=>{
    console.log(req.body)
    new FeeType({...req.body}).save().then((result)=>{
        console.log(result)
        res.status(200).send(response(true, "Fee type added successfully"))
    }).catch((error)=>{
        console.log(error)
    })
}


exports.getFeesType = (req, res)=>{
    FeeType.find({}).then((result)=>{
        res.status(200).send(response(true, "Fees type fetched successfully", result))
    }).catch((error)=>{
        console.log(error)
    })
} 