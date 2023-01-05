const SessionToken = require("../../models/sessionTokenModel");

exports.logout = (req, res) => {
    console.log(req.headers.token);
};
