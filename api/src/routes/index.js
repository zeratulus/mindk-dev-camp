const express = require('express');
const router = express.Router();

router.use(function log(req, res, next) {
    console.log((new Date).toISOString() + ` -> ${req.method}: ${req.url}`);
    next();
});

router.get('/', (req, res) => {
    res.send('Hello World');
});

module.exports = router;