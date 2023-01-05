const bcrypt = require("bcrypt");
const saltRounds = process.env.SALT_ROUNDS;

exports.hash = async (password) => {
    if (password.trim().length > 6) {
        let hash = await bcrypt.hash(password, 9)
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

