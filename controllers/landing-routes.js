const router = require('express').Router();

const { Post, Milestone, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', (req, res) => {
  res.render('landing', {
    logged_in: req.session.logged_in,
  });
});

router.get('/milestone/:id', withAuth, async (req, res) => {
  try {
    const milestoneData = await Milestone.findByPk(req.params.id, {
      include: [
        {
          model: Post,
          attributes: ['post_text', 'date_created', 'user_id', 'milestone_id'],
          include: [
            {
              model: User,
              attributes: ['username', 'id'],
            },
          ],
        },
      ],
    });

    if (!milestoneData) {
      res.status(404).json({ message: 'No milestone found with that id' });
      return;
    }

    const milestone = milestoneData.get({ plain: true });
    res.render('milestone', {
      ...milestone,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.json(err);
  }
});

router.get('/user/:id', async (req, res) => {
  try {
    const userData = await User.findByPk(req.params.id);
    const user = userData.get({ plain: true });
    res.render('userProfile', {
      ...user,
      logged_in: req.session.logged_in,
    });
    // console.log(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/signup', (req, res) => {
  if (!req.session.logged_in) {
    res.render('signup');
    return;
  }

  res.redirect('/home');
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/home');
    return;
  }

  res.render('login');
});

router.get('/profile', async (req, res) => {
  try {
    if (req.session.logged_in) {
      const userData = User.findByPk(req.session.user_id);
      const user = (await userData).get({ plain: true });
      // console.log(user);
      res.render('profile', {
        ...user,
        logged_in: req.session.logged_in,
      });
      return;
    }
    res.redirect('/login');
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
