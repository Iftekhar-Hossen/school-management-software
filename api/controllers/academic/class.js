const mongooseErrorHandler = require("mongoose-error-handler");

const ClassModel = require("../../models/classModel");
const Section = require("../../models/sectionModel");
const { response } = require("../../utils/responseGenerator");

exports.postClass = (req, res) => {
    isValidClass(req.body);
    function isValidClass(obj) {
        if (typeof obj !== "object") {
            res.status(400).send(response(false, "Invalid data type"));
            return false;
        }
        if (
            !obj.hasOwnProperty("name") ||
            typeof obj.name !== "string" ||
            !obj.hasOwnProperty("session")
        ) {
            res.status(400).send(response(false, "Class name is missing"));
            return false;
        }
        if (
            !obj.hasOwnProperty(
                "session" ||
                    typeof obj.session !== null ||
                    typeof obj.session !== "object",
            )
        ) {
            res.status(400).send(response(false, "Session type is invalid"));
            return false;
        }
        if (!obj.hasOwnProperty("sections") || !Array.isArray(obj.sections)) {
            res.status(400).send(response(false, "sections is missing"));
            return false;
        }
        for (const section of obj.sections) {
            if (
                typeof section !== "object" ||
                !section.hasOwnProperty("name") ||
                typeof section.name !== "string" ||
                !section.hasOwnProperty("capacity") ||
                typeof +section.capacity !== "number"
            ) {
                res.status(400).send(
                    response(false, "Sections data structure is not valid"),
                );
                return false;
            }
        }

        // console.log(req.body);

        new ClassModel({ name: req.body.name, session: req.body.session })
            .save()
            .then((classData) => {
                console.log(classData);
                Section.insertMany([...req.body.sections])
                    .then((sectionData) => {
                        classData.sections = classData.sections.concat(
                            sectionData.map((section) => section._id),
                        );
                        classData
                            .save()
                            .then((submitResult) => {
                                console.log(
                                    "🚀 ~ file: class.js:64 ~ classData.save ~ submitResult",
                                    submitResult,
                                );
                            })
                            .catch((submitError) => {
                                console.log(
                                    "🚀 ~ file: class.js:67 ~ classData.save ~ submitError",
                                    submitError,
                                );
                            });
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            })
            .catch((error) => {
                res.status(400).send(
                    response(false, mongooseErrorHandler.set(error)),
                );
            });
    }
};

exports.getClass = async (req, res) => {
    if (!req.query.hasOwnProperty("session")) {
        res.status(400).send(response(false, "Session is missing"));
        return;
    }
    if (
        typeof req.query.session !== "string" ||
        req.query.session.length < 10
    ) {
        res.status(400).send(response(false, "Invalid session id"));
        return;
    }

    ClassModel.find({ session: req.query.session })
        .populate({
            path: "sections",
            select: "name capacity",
        })
        .exec(function (err, classDoc) {
            if (err) return handleError(err);
            res.status(200).send(response(true, "classes list", classDoc));
        });
};
