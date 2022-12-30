const User = require("../../models/userModel")
const { comparePassword } = require("../../utils/hashPassword")
const SessionToken = require("../../models/sessionTokenModel")
const { generateToken } = require("../../utils/token")

exports.login = async (req, res) => {
    const user = await User.find({
        $or: [{
            "email": (req.body.emailPhone).toLowerCase()
        }, {
            "phone": (req.body.emailPhone).toLowerCase()
        },]
    })

    if (user.length != 0) {
        const isValidPass = await comparePassword(req.body.password, user[0].password)
        if (isValidPass.status) {
            const token = generateToken({ email: user[0].email, id: user[0]._id })
            const newToken = {
                userId: user[0]._id,
                email: user[0].email,
                profilePicture: user[0].profilePicture,
                firstName: user[0].firstName,
                lastName: user[0].lastName,
                token: token
            }
            new SessionToken(newToken).save().then((result) => {
                res.status(200).json({
                    status: 200, data: {
                        token: result.token,
                        email: result.email,
                        profilePicture: result.profilePicture,
                        firstName: result.profilePicture,
                        lastName: result.lastName
                    }
                })

            })
                .catch((error) => {
                    console.log(error)
                })
        } else {
            res.status(401).json({ status: 401, message: "Password is not correct." })
        }
    } else {
        res.status(401).json({ status: 401, message: "User is invalid." })
    }
};
