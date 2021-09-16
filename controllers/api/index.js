const router = require('express').Router();

const postRoutes = require('./postRoutes');
const userRoutes = require('./userRoutes');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);

module.exports = router;