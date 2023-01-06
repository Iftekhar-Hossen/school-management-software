const bcrypt = require("bcrypt");
const SALT_ROUNDS = process.env.SALT_ROUNDS;

exports.hash = async (password) => {
    if (password.length > 6) {
        let hash = await bcrypt.hash(password, +SALT_ROUNDS);
        return {
            message: "Password successfully encrypted",
            hash,
            status: true,
        };
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
        return { status: true };
    } else {
        return { status: false };
    }
};
