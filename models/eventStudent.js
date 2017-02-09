"use strict";

//id is the primary key and it is used as drishti/dhwani id to create QR codes

module.exports = function(sequelize, DataTypes) {
    var EventStudent = sequelize.define("event_student", {
        report: DataTypes.DATE,
        payment: {
            //total amount paid
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        paid: {
            //payment complete or not
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    }, {
        classMethods: {
            associate: function(models) {
                models.event.belongsToMany(models.student, {
                    through: EventStudent
                })
                models.student.belongsToMany(models.event, {
                    through: EventStudent
                })
            }
        }

    });

    return EventStudent;
};
