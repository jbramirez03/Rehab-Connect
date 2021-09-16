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

router.get('/milestone/:id', async (req, res) => {
    try {
        const milestoneData = await Milestone.findByPk(req.params.id);

        if(!milestoneData) {
            res.status(404).json({message: 'No milestone found with that id'});
            return;
        }

        const milestone = milestoneData.get({plain: true});
        console.log(milestone);
        res.render('milestone', {
            ...milestone
        });
    } catch (err) {
        res.json(err);
    }
});

module.exports = router;