const router = require("express").Router();
const sequelize = require("../config/connection");
const { Milestone, User, Post } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", withAuth, async (req, res) => {
  try {
    const dbPostsData = await Post.findAll({
      where: {
        user_id: req.session.user_id,
      },
      attributes: ["user_id", "id", "post_text", "date_created"],
      include: [
        {
          model: User,
          attributes: ["username"],
        },
      ],
    });

    const posts = dbPostsData.map(post =>
      post.get({ plain: true })
    );
    res.render("dashboard1", { posts, loggedIn: true });
    // console.log(posts);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/edit/:id", withAuth, async (req, res) => {
  try {
    const dbPostData = await Post.findByPk(req.params.id, {
      attributes: ["user_id", "id", "post_text", "date_created"],
      include: [
        {
          model: User,
          attributes: ["username"],
        },
      ],
    });

    if (!dbPostData) {
      res.status(404).json({ message: "No milestone found with this id" });
      return;
    }

    const post = dbPostData.get({ plain: true });
    // res.render("edit-milestone", { post, loggedIn: true });
    console.log(post);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/new", (req, res) => {
  res.render("new-milestone", { loggedIn: true });
});

module.exports = router;
