const uuid = require('uuid');
const crypto = require('crypto');
const UserProfilePropsVisibility = require('../models/userProfilePropsVisibility');
const User = require('../models/user');
const Post = require("../models/post");
const {Sequelize} = require("sequelize");
const {getUrlFromRequest} = require("../utils");
const {processError} = require("../utils");

const visibleFields = {attributes: ['id', 'firstName', 'lastName', 'email', 'phone', 'seo_alias', 'createdAt']};

function sha512(str) {
    let hash = crypto.createHash('sha512');
    let data = hash.update(str, 'utf-8');
    return data.digest('hex');
}

const UserController = {

    create(req, res) {
        //TODO: validation rules required: firstName, lastName, password, email, phone (email, phone - unique)
        let user = req.body;
        user.id = uuid.v4();
        let newUser = new User(user);
        newUser.salt = String(uuid.v4()).substr(0, 7);
        newUser.hash = sha512(user.password + newUser.salt);
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
        const id = req.params.id;
        User.findByPk(id, {...{
                include: [{
                    model: UserProfilePropsVisibility,
                }],
            },...visibleFields}).then((data) => {
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
        User.findAll({...{
            include: [{
                model: UserProfilePropsVisibility,
            }],
        },...visibleFields}).then((data) => {
            res.send(data);
        }).catch((error) => {
            processError(res, error);
        });
    },

    login(req, res) {
        const body = req.body;
        if (body.password && body.email) {
            User.findOne({where: {email: body.email}}).then((user) => {
                let hash = sha512(body.password + user.salt)
                if (user.hash === hash) {
                    return res.status(200).json( {
                        success: true,
                        isLogged: true,
                        data: {
                            id: user.id,
                            firstName: user.firstName,
                            lastName: user.lastName,
                            email: user.email,
                            phone: user.phone
                        }
                    });
                }
            }).catch((error) => {
                processError(res, error);
            });
        }
    }


}

module.exports = UserController;