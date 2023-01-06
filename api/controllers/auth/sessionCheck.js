const SessionToken = require("../../models/sessionTokenModel");

exports.sessionCheck = async (req, res) => {
    SessionToken.findOne(req.header.token)
        .then((data) => {
            console.log(data)
        })
        .catch((error) => {
            console.log(error)
        });
};
