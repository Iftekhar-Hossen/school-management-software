const Session = require("../models/sessionTokenModel");
const {response} = require("../utils/responseGenerator")
exports.sessionCheck = async (req, res, next) => {
    let session = await Session.findOne({ token: req.headers.token });
    if (session === null) {
        res.status(401).send(response(false, "Invalid session token or expired. Please login in again"));
        return
    }
    res.locals = { objectId: session.objectId };
    next();
};
