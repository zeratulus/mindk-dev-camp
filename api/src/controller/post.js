const uuid = require('uuid');
const Post = require('../models/post');
const {processError} = require("../utils");

class PostController {

    create(req, res) {
        //TODO: validation rules required: userId, visibilityId, body
        let content = req.body;
        if (content.body.length < 10) {
            res.status(400).json({success: false, message: 'Minimum content length is 10 symbols.'});
            return;
        }
        content.id = uuid.v4();
        content.visibilityId = content.userId; //todo: visibility list ids...

        let post = new Post(content);
        post.save().then((data) => {
            res.status(200).json({success: true, data});
        }).catch((error) => {
            processError(res, error);
        });
    }

    findById(req, res) {
        Post.findByPk(req.params.id).then((data) => {
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
        Post.findAll().then((data) => {
            res.send(data);
        }).catch((error) => {
            processError(res, error);
        });
    }

}

module.exports = PostController;