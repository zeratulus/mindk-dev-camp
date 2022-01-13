const express = require('express');
const router = express.Router();
const userRoutes = require('./user');
const postRoutes = require('./post');
const postCommentRoutes = require('./postComment');
const postLikeRoutes = require('./postLike');

router.use(function log(req, res, next) {
    console.log((new Date).toISOString() + ` -> ${req.method}: ${req.url}`);
    next();
});

router.get('/', (req, res) => {
    res.send('Hello World');
});

router.use('/user', userRoutes);
router.use('/post', postRoutes);
router.use('/post_comment', postCommentRoutes);
router.use('/post_like', postLikeRoutes);

module.exports = router;