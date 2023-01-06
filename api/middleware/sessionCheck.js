const Session = require("../models/sessionTokenModel");

exports.sessionCheck = async (req, res, next) => {
    let session = await Session.findOne({ token: req.headers.token });
    if (session === null) {
        res.status(401).send(response(false, "Invalid session token"));
    }
    res.locals = { objectId: session.objectId };
    next();
};
