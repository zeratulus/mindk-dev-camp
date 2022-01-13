const uuid = require('uuid');
const crypto = require('crypto');
const User = require('../models/user');
const {processError} = require("../utils");

const visibleFields = {attributes: ['id', 'firstName', 'lastName', 'email', 'phone', 'seo_alias', 'createdAt']};

const UserController = {

    create(req, res) {
        //TODO: validation rules required: firstName, lastName, password, email, phone (email, phone - unique)
        let user = req.body;
        user.id = uuid.v4();
        let newUser = new User(user);
        newUser.salt = String(uuid.v4()).substr(0, 7);
        let hash = crypto.createHash('sha512');
        let data = hash.update(user.password + newUser.salt, 'utf-8');
        newUser.hash = data.digest('hex');
        newUser.last_ip = req.ip;

        newUser.save().then((data) => {
            if (data) {
                res.status(200).json({success: true, id: newUser.id});
            }
        }).catch((error) => {
            processError(res, error);
        });
    },

    findById(req, res) {
        User.findByPk(req.params.id, visibleFields).then((data) => {
            res.send(data);
        }).catch((error) => {
            processError(res, error);
        });
    },

    deleteById(req, res) {
        User.destroy({where: {id: req.params.id}}).then((data) => {
            res.status(200).json({
                message: "Deleted successfully"
            });
            console.log(data);
        }).catch((error) => {
            processError(res, error);
        });
    },

    update(req, res) {
        User.update({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                phone: req.body.phone,
                seo_alias: req.body.seo_alias,
                last_ip: req.body.last_ip
            }, {where: {id: req.params.id}}
        ).then((data) => {
            res.status(200).json({
                message: "Updated successfully"
            });
        }).catch((error) => {
            processError(res, error);
        });
    },

    find(req, res) {
        User.findAll(visibleFields).then((data) => {
            res.send(data);
        }).catch((error) => {
            processError(res, error);
        });
    }

    //TODO: changePassword, recoveryPassword...
}

module.exports = UserController;