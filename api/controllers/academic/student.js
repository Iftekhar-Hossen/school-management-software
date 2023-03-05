const Student = require("../../models/studentModel");
const Class = require("../../models/classModel");
const Section = require("../../models/sectionModel");
const { response } = require("../../utils/responseGenerator");
const mongooseErrorHandler = require("mongoose-error-handler");
const mongoose = require("mongoose");

exports.postStudent = async (req, res) => {
    Class.exists(
        {
            _id: req.body.class,
            session: req.body.session,
        },
        (err, success) => {
            console.log({ success });
            if (err) {
                console.log(
                    "🚀 ~ file: student.js:14 ~ exports.postStudent= ~ err",
                    err,
                );
            } else {
                Section.exists(
                    { _id: req.body.section },
                    (seErr, seSection) => {
                        console.log({ seSection });
                        if (seErr) {
                            console.log({ seErr });
                        } else {
                            new Student({
                                ...req.body,
                            })
                                .save()
                                .then((result) => {
                                    Section.findByIdAndUpdate(
                                        req.body.section,
                                        {
                                            $push: {
                                                students: {
                                                    student: result._id,
                                                    admissionId:
                                                        req.body.admissionId,
                                                    classRoll:
                                                        req.body.classRoll,
                                                },
                                            },
                                            $inc: { currentStudents: 1 },
                                        },
                                        { runValidators: true },
                                        function (error, section) {
                                            console.log(
                                                "🚀 ~ file: student.js:36 ~ .then ~ section",
                                                section,
                                            );
                                            if (error) {
                                                res.status(200).send(
                                                    response(false, error),
                                                );
                                            } else {
                                                // student was successfully added to the section
                                                res.status(200).send(
                                                    response(
                                                        true,
                                                        "Student added successfully",
                                                    ),
                                                );
                                            }
                                        },
                                    );
                                })
                                .catch((stuError) => {
                                    console.log({ stuError });
                                });
                        }
                    },
                );
            }
        },
    );
};
exports.getStudent = (req, res) => {};

exports.getStudentList = (req, res) => {
    console.log(req.query);
    Section.findOne({ _id: req.query.section })
        .populate({
            path: "students.student",
            select: req.query.queries,
        })
        .exec((err, section) => {
            if (err) {
                // handle error
            } else {
                console.log(section);
                if (section) {
                    res.status(200).send(
                        response(
                            true,
                            "Students fetched successfully",
                            section.students,
                        ),
                    );
                } else {
                    res.status(200).send(
                        response(
                            true,
                            "No students fetched",
                        ),
                    );
                }
            }
        });
};
