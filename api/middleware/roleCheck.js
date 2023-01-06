const Administrator = require("../models/administratorModel");

exports.isAdmin = async (req, res, next) => {
    console.log(req.body)
    let administrator = await Administrator.findOne({
        _id: res.locals.objectId,
    });

    if (
        administrator.role.includes("super_admin") ||
        administrator.role.includes("admin")
    ) {
        res.locals = {
            objectId: administrator.objectId,
        };
        next();
    } else {
        res.status(403).send(
            response(false, "You don't have access for this request"),
        );
    }
};
