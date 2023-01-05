const Administrator = require("../../models/administratorModel");
const { comparePassword } = require("../../utils/hashPassword");
const SessionToken = require("../../models/sessionTokenModel");
const { generateToken } = require("../../utils/token");
import { response } from "../../utils/responseGenerator";

exports.login = async (req, res) => {
    const admin = await Administrator.find({});
    console.log(admin);
    const administrator = await Administrator.findOne({
        $or: [
            {
                phoneNumber: req.body.emailPhoneAdministratorId.toLowerCase(),
            },
            {
                administratorId:
                    req.body.emailPhoneAdministratorId.toLowerCase(),
            },
            {
                email: req.body.emailPhoneAdministratorId.toLowerCase(),
            },
        ],
    });
    if (administrator) {
        const isValidPass = await comparePassword(
            req.body.password,
            administrator.password,
        );
        if (isValidPass.status) {
            const token = generateToken({
                email: administrator.email,
                id: administrator._id,
            });
            const data = {
                firstName: administrator.firstName,
                lastName: administrator.lastName,
                profilePicture: administrator.profilePicture,
                administratorId: administrator.administratorId,
                token: token,
                objectId: administrator._id,
            };
            new SessionToken(data)
                .save()
                .then((result) => {
                    res.status(200).json({
                        status: 200,
                        data: {
                            token: result.token,
                            email: administrator.email,
                            profilePicture: administrator.profilePicture,
                            firstName: administrator.firstName,
                            lastName: administrator.lastName,
                        },
                    });
                })
                .catch((error) => {
                    console.log(error);
                });
        } else {
            res.status(401)res.send(response(false, "Password is invalid", ))
            res.json({ status: 401, message: "Password is invalid" });
        }
    } else {
        res.status(401).json({
            status: 401,
            message: "administrator is invalid.",
        });
    }
};
