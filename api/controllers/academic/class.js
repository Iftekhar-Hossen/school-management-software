const mongooseErrorHandler = require('mongoose-error-handler');

const ClassModel = require("../../models/ClassModel");
const {response} = require("../../utils/responseGenerator")

exports.postClass = (req, res) => {
    isValidClass(req.body);
    function isValidClass(obj) {
        if (typeof obj !== "object") {
    		res.status(400).send(response(false, "Invalid data type"))
            return false;
        }
        if (!obj.hasOwnProperty("name") || typeof obj.name !== "string" || !obj.hasOwnProperty("session") ) {
    		res.status(400).send(response(false, "Class name is missing"))
            return false;
        }
          if (!obj.hasOwnProperty("session" || typeof obj.session !== null || typeof obj.session !== "object") ) {
            res.status(400).send(response(false, "Session type is invalid"))
            return false;
        }
        if (!obj.hasOwnProperty("sections") || !Array.isArray(obj.sections)) {
    		res.status(400).send(response(false, "sections is missing"))
            return false;
        }
        for (const section of obj.sections) {
            if (
                typeof section !== "object" ||
                !section.hasOwnProperty("name") ||
                typeof section.name !== "string" ||
                !section.hasOwnProperty("capacity") ||
                typeof +section.capacity !== "number"
            ) {
    			res.status(400).send(response(false, "Sections data structure is not valid"))
                return false;
            }
        }

    	new ClassModel(req.body).save().then((data)=>{
        		res.status(200).send(response(true, "Class added successfully"))
    		}).catch((error)=>{
        		res.status(400).send(response(false, mongooseErrorHandler.set(error)))
    		})

        return true;
    }
};

exports.getClass = async(req, res) => {
   if (!req.query.hasOwnProperty("session") ) {
            res.status(400).send(response(false, "Session is missing"))
            return;
    }
    if (typeof req.query.session !== "string" || req.query.session.length < 10 ) {
            res.status(400).send(response(false, "Invalid session id"))
            return;
    }
    const classes = await ClassModel.find({session: req.query.session})
    res.status(200).send(response(true, "classes list", classes))

};
