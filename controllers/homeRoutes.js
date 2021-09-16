const router = require("./api/postRoutes");

const {Post, Milestone, User} = require('../models');

router.get('/', async (req, res) => {
    try {
        const milestoneData = await Milestone.findAll({
            include: [{
                model: Post,
                attributes: ['post_text', 'user_id', 'date_created']
            }
        ],
        });
        const milestones = milestoneData.map(milestone => milestone.get({plain: true}));
        res.render('homepage', {
            milestones,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.json(err);
    }
});