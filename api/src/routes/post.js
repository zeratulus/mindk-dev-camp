const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({dest: '/storage/uploads'});
const PostController = require('../controller/post');

controller = new PostController();

router.post('/', upload.single('photo'), controller.create);
router.get('/', controller.find);
router.get('/:id', controller.findById);
router.get('/:id/user', controller.findByUserId);
router.put('/:id', controller.update);
router.delete('/:id', controller.deleteById);

module.exports = router;