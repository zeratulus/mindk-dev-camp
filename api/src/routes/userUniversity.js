const express = require('express');
const router = express.Router();
const UserUniversityController = require('../controller/userUniversity');

router.post('/', UserUniversityController.create);
router.get('/', UserUniversityController.find);
router.get('/:id', UserUniversityController.findById);
router.put('/:id', UserUniversityController.update);
router.delete('/:id', UserUniversityController.deleteById);

module.exports = router;