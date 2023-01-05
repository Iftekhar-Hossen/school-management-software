const Administrator = require("../models/administratorModel");

exports.isAdmin = async (req, res, next) => {
    let administrator = await Administrator.findOne({
        _id: res.locals.objectId,
    });

    if (administrator.role == "super_admin" || administrator.role == "admin") {
        res.locals = {
            objectId: administrator.objectId,
            firstName: administrator.firstName,
            lastName: administrator.lastName,
        };
        next();
    } else {
        res.status(403).json({ statusCode: 403, message: "Unauthorized" });
    }
};
