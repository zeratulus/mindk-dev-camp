const express = require('express');
const router = express.Router();
const UserFriendsController = require('../controller/userFriends');

router.post('/', UserFriendsController.create);
router.get('/', UserFriendsController.find);
router.get('/:id', UserFriendsController.findById);
router.put('/:id', UserFriendsController.update);
router.delete('/:id', UserFriendsController.deleteById);

module.exports = router;