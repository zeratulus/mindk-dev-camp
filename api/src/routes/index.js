const express = require('express');
const uuid = require('uuid');
const router = express.Router();
const userRoutes = require('./user');
const userFriendsRoutes = require('./userFriends');
const userProfilePropsVisibility = require('./userProfilePropsVisibility');
const postRoutes = require('./post');
const postCommentRoutes = require('./postComment');
const postLikeRoutes = require('./postLike');
const universityRoutes = require('./university');
const userUniversityRoutes = require('./userUniversity');

router.use(function log(req, res, next) {
    console.log((new Date).toISOString() + ` -> ${req.method}: ${req.url}`);
    next();
});

router.get('/', (req, res) => {
    res.send('Hello World');
});

router.get('/random_uuid', (req, res) => {
    res.send(uuid.v4());
});

router.use('/user', userRoutes);
router.use('/user_friends', userFriendsRoutes);
router.use('/user_props_visibility', userProfilePropsVisibility);
router.use('/post', postRoutes);
router.use('/post_comment', postCommentRoutes);
router.use('/post_like', postLikeRoutes);
router.use('/university', universityRoutes);
router.use('/user_university', userUniversityRoutes);

module.exports = router;