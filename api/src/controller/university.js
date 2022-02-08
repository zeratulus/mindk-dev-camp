const uuid = require('uuid');
const University = require('../models/university');
const {processError} = require("../utils");

const UniversityController = {

    create(req, res) {
        let user = req.body;
        user.id = uuid.v4();
        let newUniversity = new University(user);

        newUniversity.save().then((data) => {
            if (data) {
                res.status(200).json({success: true, id: newUniversity.id});
            }
        }).catch((error) => {
            processError(res, error);
        });
    },

    findById(req, res) {
        const id = req.params.id;
        University.findByPk(id).then((data) => {
            res.send(data);
        }).catch((error) => {
            processError(res, error);
        });
    },

    deleteById(req, res) {
        University.destroy({where: {id: req.params.id}}).then((data) => {
            res.status(200).json({
                message: "Deleted successfully"
            });
            console.log(data);
        }).catch((error) => {
            processError(res, error);
        });
    },

    update(req, res) {
        University.update(req.body, {where: {id: req.params.id}}
        ).then((data) => {
            res.status(200).json({
                message: "Updated successfully"
            });
        }).catch((error) => {
            processError(res, error);
        });
    },

    find(req, res) {
        University.findAll().then((data) => {
            res.send(data);
        }).catch((error) => {
            processError(res, error);
        });
    }

}

module.exports = UniversityController;