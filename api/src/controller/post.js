const uuid = require('uuid');
const Post = require('../models/post');
const PostLike = require('../models/postLike');
const PostCommentary = require('../models/postCommentary');
const User = require("../models/user");
const {processError} = require("../utils");

class PostController {

    create(req, res) {
        let data = req.body;
        if (data.body.length < 10) {
            res.status(400).json({success: false, message: 'Minimum content length is 10 symbols.'});
            return;
        }
        data.id = uuid.v4();
        let post = new Post(data);
        post.save().then((data) => {
            res.status(200).json({success: true, data});
        }).catch((error) => {
            processError(res, error);
        });
    }

    findById(req, res) {
        Post.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ['firstName', 'lastName', 'avatar']
                },
                {
                    model: PostCommentary,
                    include: [
                        {
                            model: User,
                            attributes: ['firstName', 'lastName', 'avatar'],
                        },
                    ],
                },
                {
                    model: PostLike
                }
            ]
        }
        ).then((data) => {
            res.send(data);
        }).catch((error) => {
            processError(res, error);
        });
    }

    findByUserId(req, res) {
        const id = req.params.id;
        Post.findAll({
            where: {userId: id},
            include: [
                {
                    model: User,
                    attributes: ['firstName', 'lastName', 'avatar']
                },
                {
                    model: PostCommentary,
                    include: [
                        {
                            model: User,
                            attributes: ['firstName', 'lastName', 'avatar'],
                        },
                    ],
                },
                {
                    model: PostLike
                }
            ],
            order: [
                ['createdAt', 'DESC']
            ]
        }).then((data) => {
            res.send(data);
        }).catch((error) => {
            processError(res, error);
        });
    }

    deleteById(req, res) {
        Post.destroy({where: {id: req.params.id}}).then((data) => {
            res.status(200).json({
                message: "Deleted successfully"
            });
        }).catch((error) => {
            processError(res, error);
        });
    }

    update(req, res) {
        Post.update({...req.body}, {where: {id: req.params.id}}
        ).then((data) => {
            res.status(200).json({
                message: "Updated successfully"
            });
        }).catch((error) => {
            processError(res, error);
        });
    }

    find(req, res) {
        Post.findAll({
            include: [
                {
                    model: User,
                    attributes: ['firstName', 'lastName', 'avatar']
                },
                {
                    model: PostCommentary,
                    include: [
                        {
                            model: User,
                            attributes: ['firstName', 'lastName', 'avatar'],
                        },
                    ],
                },
                {
                    model: PostLike
                }
            ],
            order: [
                ['createdAt', 'DESC']
            ]
        }).then((data) => {
            res.send(data);
        }).catch((error) => {
            processError(res, error);
        });
    }

}

module.exports = PostController;