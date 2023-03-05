const AccountType = require("../../../models/AccountTypeModel");
const Account = require("../../../models/AccountModel");

exports.postAccount = (req, res) => {
    console.log(req.body);
    AccountType.exists({ _id: req.body.type }).then(() => {
        new Account({ ...req.body })
            .save()
            .then((result) => {
                console.log(result);
                res.status(200).send({
                    status: true,
                    message: "Account added successfully",
                });
            })
            .catch((error) => {
                console.log(error);
            });
    });
};

exports.getAccount = (req, res) => {
    Account.find({}).populate({
        path: "type",
        select: "name"
    })
        .then((result) => {
            res.status(200).send({
                status: true,
                message: "Accounts list",
                data: result,
            });
        })
        .catch((error) => {
            console.log(
                "🚀 ~ file: account.js:27 ~ AccountType.find ~ error",
                error,
            );
        });
};

exports.postAccountType = (req, res) => {
    new AccountType({ ...req.body })
        .save()
        .then((result) => {
            res.status(200).send({
                status: true,
                message: "Account type added successfully",
            });
        })
        .catch((error) => {
            console.log("🚀 ~ file: account.js:17 ~ error", error);
        });
};

exports.getAccountType = (req, res) => {
    AccountType.find({})
        .then((result) => {
            res.status(200).send({
                status: true,
                message: "Account types list",
                data: result,
            });
        })
        .catch((error) => {
            console.log(
                "🚀 ~ file: account.js:27 ~ AccountType.find ~ error",
                error,
            );
        });
};
