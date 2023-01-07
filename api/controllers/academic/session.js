const mongooseErrorHandler = require('mongoose-error-handler');

const Session = require("../../models/sessionModel");
const {response} = require("../../utils/responseGenerator")

exports.postSession = (req, res) => {
  new Session({
        ...req.body,
    }).save().then((data)=>{
        res.status(200).send(response(true, "Session added successfully"))
    }).catch((error)=>{
        res.status(404).send(response(false, mongooseErrorHandler.set(error)))
    })

    

};

exports.getSession = async(req, res) => {
    const sessions = await Session.find({}).select("name startDate endDate")
    res.status(200).send(response(true, "session list", sessions))

};
