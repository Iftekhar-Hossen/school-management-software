const SubjectModel = require("../../models/subjectModel");
exports.postSubject = (req, res) => {
    console.log(req.body)
    new SubjectModel({ ...req.body })
        .save()
        .then((result) => {
            res.status(200).send({
                status: true,
                message: "Subject added successfully",
            });
        })
        .catch((error) => {
            console.log(error)
        });
};

exports.getSubject = (req, res)=>{
    SubjectModel.find({}).then((result)=>{
        res.status(200).send({
            status: true,
            message: "Subject found successfully",
            data: result
        })
    }).catch((error)=>{
        console.log(error)
    })
}
