const Administrator = require("../../models/administratorModel");
const { hash } = require("../../utils/hashPassword");
const generator = require("generate-password");
const date = new Date();

exports.addAdmin = async (req, res) => {
    console.log("data",req.body)
    let plainPass = generator.generate({
        length: 10,
        numbers: true,
    });
    const hashPass = await hash(plainPass);

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
            res.status(200).json({
                statusCode: 200,
                data: {
                    administratorId: result.administratorId,
                    phoneNumber: result.phoneNumber,
                    password: plainPass,
                },
            });
        })
        .catch((error) => {
            res.status(404).json({
                statusCode: 401,
                message:
                    (error.keyValue.hasOwnProperty("email") &&
                        "Email already exist") ||
                    (error.keyValue.hasOwnProperty("phoneNumber") &&
                        "Phone number already exist"),
            });
        });
};
