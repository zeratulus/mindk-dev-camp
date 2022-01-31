const express = require('express');
const multer = require('multer');
const upload = multer({dest: '/storage/uploads'})
const router = express.Router();
const UserController = require('../controller/user');

router.use(function log(req, res, next) {
    console.log((new Date).toISOString() + ` -> ${req.method}: ${req.url}`);
    next();
});

router.post('/', UserController.create);
router.get('/', UserController.find);
router.get('/:id', UserController.findById);
router.put('/:id', UserController.update);
router.delete('/:id', UserController.deleteById);
router.post('/login', UserController.login);
router.post('/:id/avatar', upload.single('avatar'), UserController.uploadAvatar);
router.get("/:id/avatar", UserController.getAvatar);

module.exports = router;