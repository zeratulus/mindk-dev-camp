const express = require('express');
const router = express.Router();
const PostCommentController = require('../controller/postComment');

controller = new PostCommentController();

router.post('/', controller.create);
router.get('/', controller.find);
router.get('/:id', controller.findById);
router.put('/:id', controller.update);
router.delete('/:id', controller.deleteById);

module.exports = router;