exports.response = (status, message, data) => {
    return JSON.stringify({
        status,
        message,
        data,
    });
};
