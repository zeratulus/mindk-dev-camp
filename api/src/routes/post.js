const express = require('express');
const router = express.Router();
const PostController = require('../controller/post');

controller = new PostController();

router.post('/', controller.create);
router.get('/', controller.find);
router.get('/:id', controller.findById);
router.get('/:id/user', controller.findByUserId);
router.put('/:id', controller.update);
router.delete('/:id', controller.deleteById);

module.exports = router;