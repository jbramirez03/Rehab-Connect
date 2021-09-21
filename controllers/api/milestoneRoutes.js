const { Milestone } = require('../../models');
const router = require('express').Router();

router.post('/', async (req, res) => {
  try {
    const newMilestone = await Milestone.create({
      name: req.body.name,
      description: req.body.description,
    });
    res.status(200).json(newMilestone);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
