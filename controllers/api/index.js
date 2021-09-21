const router = require('express').Router();

const postRoutes = require('./postRoutes');
const userRoutes = require('./userRoutes');
const milestoneRoutes = require('./milestoneRoutes');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/milestones', milestoneRoutes);

module.exports = router;
