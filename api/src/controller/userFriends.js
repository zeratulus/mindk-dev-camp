const uuid = require('uuid');
const UserFriends = require('../models/userFriends');
const User = require('../models/user');
const {processError} = require("../utils");

const visibleFields = {attributes: ['id', 'firstName', 'lastName', 'email', 'phone', 'seo_alias', 'createdAt']};

const UserFriendsController = {

    create(req, res) {
        let data = req.body;
        data.id = uuid.v4();
        let newUserFriend = new UserFriends(data);
        newUserFriend.status = false;
        newUserFriend.save().then((data) => {
            if (data) {
                res.status(200).json({success: true, id: newUserFriend.id});
            }
        }).catch((error) => {
            processError(res, error);
        });
    },

    findById(req, res) {
        const id = req.params.id;
        UserFriends.findByPk(id, {
                include: [{
                    model: User,
                    attributes: ['id', 'firstName', 'lastName', 'email', 'phone', 'seo_alias', 'createdAt']
                }],
            }).then((data) => {
            res.send(data);
        }).catch((error) => {
            processError(res, error);
        });
    },

    deleteById(req, res) {
        UserFriends.destroy({where: {id: req.params.id}}).then((data) => {
            res.status(200).json({
                message: "Deleted successfully"
            });
            console.log(data);
        }).catch((error) => {
            processError(res, error);
        });
    },

    update(req, res) {
        UserFriends.update(req.body, {where: {id: req.params.id}}).then((data) => {
            res.status(200).json({
                message: "Updated successfully"
            });
        }).catch((error) => {
            processError(res, error);
        });
    },

    find(req, res) {
        let options = {
            include: [
                {
                    model: User,
                    attributes: ['id', 'firstName', 'lastName', 'email', 'phone', 'seo_alias', 'createdAt']
                }
            ]
        }

        if (req.query.userId) {
            options.where = {userId: req.query.userId};
        }

        if (req.query.friendId) {
            options.where = {friendId: req.query.friendId};
        }

        UserFriends.findAll(options).then((data) => {
            res.send(data);
        }).catch((error) => {
            processError(res, error);
        });
    }


}

module.exports = UserFriendsController;