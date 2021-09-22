const router = require('express').Router();
const sequelize = require('../config/connection');
const { Milestone, User, Post } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      include: {
        model: Post,
        attributes: ['user_id', 'id', 'post_text', 'date_created'],
        include: {
          model: User,
          attributes: ['username'],
        },
      },
    });

    const user = userData.get({ plain: true });
    res.render('dashboard', { ...user, logged_in: true });
    // console.log(posts);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/edit/:id', withAuth, async (req, res) => {
  try {
    const dbPostData = await Post.findByPk(req.params.id, {
      attributes: ['user_id', 'id', 'post_text', 'date_created'],
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });

    if (!dbPostData) {
      res.status(404).json({ message: 'No Post found with this id' });
      return;
    }

    const post = dbPostData.get({ plain: true });
    res.render('edit-post', { ...post, logged_in: true });
    // console.log(post);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/new', (req, res) => {
  res.render('new-milestone', { loggedIn: true });
});

module.exports = router;
