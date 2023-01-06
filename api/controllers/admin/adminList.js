const Administrator = require("../../models/administratorModel");
const { response } = require("../../utils/responseGenerator");

exports.adminList = async (req, res) => {
    const admins = await Administrator.find({}).select(
        "email firstName lastName dateOfJoin role dateOfJoin phoneNumber presentAddress",
    );
    res.status(200).send(response(true, "", admins));
};
