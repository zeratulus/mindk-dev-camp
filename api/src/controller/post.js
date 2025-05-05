const uuid = require('uuid');
const Post = require('../models/post');
const PostLike = require('../models/postLike');
const PostImage = require('../models/postImage');
const PostCommentary = require('../models/postCommentary');
const User = require("../models/user");
const path = require("path");
const fs = require("fs");
const ConfigService = require("../services/config");
const {processError} = require("../utils");

class PostController {

    create(req, res, next) {
        let postDataResult;
        let data = req.body;
        if (data.body.length < 10) {
            res.status(400).json({success: false, message: 'Minimum content length is 10 symbols.'});
            return;
        }

        //save post
        const postId = uuid.v4();
        data.id = postId;
        let post = new Post(data);
        post.save().then((data) => {
            postDataResult = {success: true, data};
            //save postImage
            if (req.file) {
                //dir is: .../storage/uploads/userId.uuid/postId.uuid/
                const dir = `${ConfigService.app.dirStorage}/uploads/${req.params.userId}/${postId}/`;
                if (!fs.existsSync(dir)) {
                    fs.mkdirSync(dir, {recursive: true});
                }

                const fileExt = path.extname(req.file.originalname).toLowerCase();
                const filename = uuid.v4() + fileExt;
                const filePath = dir + filename;
                const tempPath = req.file.path;

                if (fileExt === ".png" || fileExt === ".jpg" || fileExt === ".jpeg") {
                    fs.rename(tempPath, filePath, err => {
                        if (err) return processError(res, err)

                        if (postDataResult.success) {
                            const image = new PostImage({
                                id: uuid.v4(),
                                postId,
                                image: filename,
                            });

                            image.save().then((data) => {
                                res.status(200).json(postDataResult);
                            }).catch((error) => {
                                return processError(res, error);
                            });
                        } else {
                            return processError(res, postDataResult.error);
                        }
                    });
                } else {
                    fs.unlink(tempPath, err => {
                        if (err) return processError(res, err);
                        return res.status(403).json("Only .png and .jpg files are allowed!");
                    });
                }
            }
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

        //TODO: save postImage
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
                },
                {
                    model: PostImage
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
                },
                {
                    model: PostImage
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