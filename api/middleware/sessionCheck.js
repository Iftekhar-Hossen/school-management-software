const Session = require("../models/sessionTokenModel");

exports.sessionCheck = async (req, res, next) => {
    let session = await Session.findOne({ token: req.headers.token });
    if (session === null) {
        res.status(401).end({
            message: "Session is not valid anymore or changed",
        });
    }
    res.locals = { objectId: session.objectId };
    next();
};
