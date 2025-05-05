const uuid = require('uuid');
const PostLike = require('../models/postLike');
const User = require("../models/user");
const {processError} = require("../utils");

class PostLikeController {

    create(req, res) {
        let content = req.body;
        content.id = uuid.v4();

        let post = new PostLike(content);
        post.save().then((data) => {
            res.status(200).json({success: true, data});
        }).catch((error) => {
            processError(res, error);
        });
    }

    findById(req, res) {
        PostLike.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ['id', 'firstName', 'lastName', 'avatar']
                }
            ]
        }).then((data) => {
            res.send(data);
        }).catch((error) => {
            processError(res, error);
        });
    }

    deleteById(req, res) {
        PostLike.destroy({where: {id: req.params.id}}).then((data) => {
            res.status(200).json({
                message: "Deleted successfully"
            });
        }).catch((error) => {
            processError(res, error);
        });
    }

    update(req, res) {
        PostLike.update({...req.body}, {where: {id: req.params.id}}
        ).then((data) => {
            res.status(200).json({
                message: "Updated successfully"
            });
        }).catch((error) => {
            processError(res, error);
        });
    }

    find(req, res) {
        let options = {
            include: [
                {
                    model: User,
                    attributes: ['id', 'firstName', 'lastName', 'avatar']
                }
            ]
        }

        if (req.query.postId) {
            options.where = {postId: req.query.postId};
        }

        PostLike.findAll(options).then((data) => {
            res.send(data);
        }).catch((error) => {
            processError(res, error);
        });
    }

}

module.exports = PostLikeController;