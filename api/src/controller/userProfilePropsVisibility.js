const uuid = require('uuid');
const UserProfilePropsVisibility = require('../models/userProfilePropsVisibility');
const {processError} = require("../utils");

const UserProfilePropsVisibilityController = {

    create(req, res) {
        //TODO: validation rules required: firstName, lastName, password, email, phone (email, phone - unique)
        let data = req.body;
        data.id = uuid.v4();
        let newProps = new UserProfilePropsVisibility(data);

        newProps.save().then((data) => {
            res.status(200).json(data);
        }).catch((error) => {
            processError(res, error);
        });
    },

    findById(req, res) {
        const id = req.params.id;
        UserProfilePropsVisibility.findByPk(id).then((data) => {
            res.send(data);
        }).catch((error) => {
            processError(res, error);
        });
    },

    deleteById(req, res) {
        UserProfilePropsVisibility.destroy({where: {id: req.params.id}}).then((data) => {
            res.status(200).json({
                message: "Deleted successfully"
            });
            console.log(data);
        }).catch((error) => {
            processError(res, error);
        });
    },

    update(req, res) {
        UserProfilePropsVisibility.update(req.body, {where: {id: req.params.id}}
        ).then((data) => {
            res.status(200).json({
                message: "Updated successfully"
            });
        }).catch((error) => {
            processError(res, error);
        });
    },

    find(req, res) {
        UserProfilePropsVisibility.findAll({}).then((data) => {
            res.send(data);
        }).catch((error) => {
            processError(res, error);
        });
    }

}

module.exports = UserProfilePropsVisibilityController;