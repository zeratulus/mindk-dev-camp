const uuid = require('uuid');
const University = require('../models/university');
const UserUniversity = require('../models/userUniversity');
const {processError} = require("../utils");

const UserUniversityController = {

    create(req, res) {
        let data = req.body;
        data.id = uuid.v4();
        let newUserUniversity = new UserUniversity(data);

        newUserUniversity.save().then((data) => {
            if (data) {
                res.status(200).json({success: true, id: newUserUniversity.id});
            }
        }).catch((error) => {
            processError(res, error);
        });
    },

    findById(req, res) {
        const id = req.params.id;
        UserUniversity.findByPk(id).then((data) => {
            res.send(data);
        }).catch((error) => {
            processError(res, error);
        });
    },

    deleteById(req, res) {
        UserUniversity.destroy({where: {id: req.params.id}}).then((data) => {
            res.status(200).json({
                message: "Deleted successfully"
            });
            console.log(data);
        }).catch((error) => {
            processError(res, error);
        });
    },

    update(req, res) {
        UserUniversity.update(req.body, {where: {id: req.params.id}}
        ).then((data) => {
            res.status(200).json({
                message: "Updated successfully"
            });
        }).catch((error) => {
            processError(res, error);
        });
    },

    find(req, res) {
        UserUniversity.findAll().then((data) => {
            res.send(data);
        }).catch((error) => {
            processError(res, error);
        });
    }

}

module.exports = UserUniversityController;