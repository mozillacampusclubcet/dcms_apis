var express = require('express');
var debug = require('debug')('user');
var admin = require("firebase-admin");
var router = express.Router();
var models = require("../../models");
var Student = models.student;
router.get('/', function(req, res, next) {
    res.status(401).send('no route');
});

/**
 * @api {post} /user/login Login a Student
 * @apiName Login
 * @apiGroup Student
 * @apiVersion 1.0.0
 * 
 * @apiParam {String} idToken Id token from login.
 *
 * @apiSuccessExample {json} new student
 {
  "student": {
    "accomodation": "none",
    "status": "pending",
    "id": 2,
    "uid": "bJ1rrx0lpVSbUPs1WphU0BHfItD2",
    "updatedAt": "2017-02-04T09:37:09.000Z",
    "createdAt": "2017-02-04T09:37:09.000Z"
  },
  "created": true
}

 * @apiSuccessExample {json} logging in old student
{
  "student": {
    "id": 1,
    "name": "nisham",
    "uid": "bJ1rrx0lpVSbUPs1WphU0BHfItD2",
    "phone": "65431687",
    "accomodation": "none",
    "status": "pending",
    "createdAt": "2017-02-04T09:21:52.000Z",
    "updatedAt": "2017-02-04T09:21:52.000Z",
    "collegeId": 654
  },
  "created": false
}
 *
 * @apiErrorExample {json} authentication error
{
    code: 1,
    data: {},
    message: "Authentication Error"
}

 * @apiErrorExample {json} creation error
{
    code: 1,
    data: {},
    message: "Could not create user"
}

 */
router.post('/login', function(req, res, next) {
    var student = Student.build(req.body);
    student.uid = req.uid;
    delete student.id;
    debug(student);
    Student.findOrCreate({
        where: {
            uid: student.uid
        }
        /*,
        defaults: {
            name: student.name
        }*/

    }).spread(function(studentEntry, created) {
        res.send({
            student: studentEntry,
            created: created
        });
    }).catch(function(error) {
        res.status(500)
            .send({
                code: 1,
                data: error,
                message: "Could not create user"
            });
    });
})
module.exports = router;