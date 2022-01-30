const express = require('express');
const router = express.Router();
const PostLikeController = require('../controller/postLike');

router.use(function log(req, res, next) {
    console.log((new Date).toISOString() + ` -> ${req.method}: ${req.url}`);
    next();
});

controller = new PostLikeController();

router.post('/', controller.create);
router.get('/', controller.find);
router.get('/:id', controller.findById);
router.put('/:id', controller.update);
router.delete('/:id', controller.deleteById);

module.exports = router;