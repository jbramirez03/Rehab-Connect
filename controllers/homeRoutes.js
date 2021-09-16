const router = require('express').Router();
const {Post, Milestone, User} = require('../models');

router.get('/', async (req, res) => {
    try {
        const milestonesData = await Milestone.findAll({});
        const milestones = milestonesData.map(milestone => milestone.get({plain: true}));
        console.log(milestones);
        res.render('homepage', {
            milestones,
        });
    } catch (err) {
        res.json(err);
    }
});

module.exports = router;