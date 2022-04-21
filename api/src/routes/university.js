const express = require('express');
const router = express.Router();
const UniversityController = require('../controller/university');

router.post('/', UniversityController.create);
router.get('/', UniversityController.find);
router.get('/:id', UniversityController.findById);
router.put('/:id', UniversityController.update);
router.delete('/:id', UniversityController.deleteById);

module.exports = router;