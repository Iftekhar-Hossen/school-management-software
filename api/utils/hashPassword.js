const bcrypt = require("bcrypt");
const saltRounds = process.env.SALTROUNDS;

exports.hash = async (password) => {
    if (password.trim().length > 8) {
        let hash = await bcrypt.hash(password, saltRounds)
        return {
            message: "Password successfully encrypted",
            hash,
            status: true,
        }
    } else {
        return {
            message: "Password is smaller than minimum requirement",
            status: false,
        };
    }
};

exports.comparePassword = async (password, hashPassword) => {
    const passwordMatch = await bcrypt.compare(password, hashPassword);
    if (passwordMatch) {
        return { status: true }
    } else {
        return { status: false }

    }
}

