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
    // res.render("dashboard", { milestones, loggedIn: true });
    console.log(posts);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/edit/:id", withAuth, async (req, res) => {
  try {
    const milestonesData = await milestone.findOne({
      where: {
        id: req.params.id,
      },
      attributes: ["id", "title", "content", "created_at"],
      include: [
        {
          model: User,
          attributes: ["username"],
        },
        {
          model: Comment,
          attributes: [
            "id",
            "comment_text",
            "milestone_id",
            "user_id",
            "created_at",
          ],
          include: {
            model: User,
            attributes: ["username"],
          },
        },
      ],
    });

    if (!milestonesData) {
      res.status(404).json({ message: "No milestone found with this id" });
      return;
    }

    const milestone = milestonesData.get({ plain: true });
    res.render("edit-milestone", { milestone, loggedIn: true });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/new", (req, res) => {
  res.render("new-milestone", { loggedIn: true });
});

module.exports = router;
