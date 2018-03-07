var router = require('express').Router();
var debug = require('debug')('public');
var models = require('../../models');
var constant = require('../../constant');

router.post('/', (req, res, next) => {
    console.log(req.body.email);
    if (!req.body.paid)
        req.body.paid = true;
    // if (!req.admin || req.admin.status < 7)
    //     return res.status(401).json('not authorized')
    // console.log(req.body.userEmailId);
    models.student.findOne({
        where: {
            email: req.body.userEmailId
        }
    })
        .then(student => {
            console.log(student.id);
            return models.eventStudent.findOne({
                where: {
                    eventId: req.body.eventCode,
                    studentId: student.id
                }
            })
        })
        .then(eventStudent => {
            eventStudent.paid = req.body.paid
            models.payment.create({
                // adminId: req.admin.id,
                eventStudentId: eventStudent.id,
                paid: req.body.paid
            });
            return eventStudent.save()
        })
        .then(eventStudent => {
            res.json(eventStudent)
        })
        .catch(err => {
            console.log(err);
            constant.noStudentFound.data = err;
            return res.status(400).json(constant.noStudentFound);
        })
})

module.exports = router;