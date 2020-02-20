// LOOK AT STRUCTURE of todo app

var router = require('express').Router();

router.use('/api', require('./api'));

module.exports = router;