var router = require('express').Router();

router.use('/users', require('./users'));
// router.use('/lists', require('./lists'));
// router.use('/todos', require('./todos'));

module.exports = router;