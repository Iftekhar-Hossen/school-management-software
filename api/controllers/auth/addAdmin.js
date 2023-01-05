const Administrator = require("../../models/administratorModel");
const { hash } = require("../../utils/hashPassword");
exports.addAdmin = async (req, res) => {
    const date = new Date();
    const hashPass = await hash(req.body.password);
    const totalAdmin = await Administrator.countDocuments({
        createdAt: { $gte: date.getFullYear() },
    });
    const admin = new Administrator({
        ...req.body,
        password: hashPass.hash,
        addedBy: res.locals,
        administratorId: `${date.getFullYear()}${totalAdmin + 1}`,
    });
    admin
        .save()
        .then((result) => {
            console.log(result)
            res.status(200).json({
                statusCode: 200,
                data: {
                    administratorId: result.administratorId,
                    phoneNumber: result.phoneNumber,
                },
            });
        })
        .catch((error) => {
            res.status(404).json({
                statusCode: 401,
                message: error,
            });
        });
};
