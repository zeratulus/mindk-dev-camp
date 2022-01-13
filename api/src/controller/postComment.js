const uuid = require('uuid');
const postCommentary = require('../models/postCommentary');
const {processError} = require("../utils");

class PostCommentController {

    create(req, res) {
        //TODO: validation rules required: userId, postId, body
        let content = req.body;
        if (content.body.length < 10) {
            res.status(400).json({success: false, message: 'Minimum content length is 10 symbols.'});
            return;
        }
        content.id = uuid.v4();

        let post = new postCommentary(content);
        post.save().then((data) => {
            res.status(200).json({success: true, data});
        }).catch((error) => {
            processError(res, error);
        });
    }

    findById(req, res) {
        postCommentary.findByPk(req.params.id).then((data) => {
            res.send(data);
        }).catch((error) => {
            processError(res, error);
        });
    }

    deleteById(req, res) {
        postCommentary.destroy({where: {id: req.params.id}}).then((data) => {
            res.status(200).json({
                message: "Deleted successfully"
            });
        }).catch((error) => {
            processError(res, error);
        });
    }

    update(req, res) {
        postCommentary.update({...req.body}, {where: {id: req.params.id}}
        ).then((data) => {
            res.status(200).json({
                message: "Updated successfully"
            });
        }).catch((error) => {
            processError(res, error);
        });
    }

    find(req, res) {
        postCommentary.findAll().then((data) => {
            res.send(data);
        }).catch((error) => {
            processError(res, error);
        });
    }

}

module.exports = PostCommentController;