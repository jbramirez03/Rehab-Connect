const router = require("express").Router();
const { Post, Milestone, User } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  try {
    const milestonesData = await Milestone.findAll({
      include: [
        {
          model: Post,
          attributes: ["post_text", "date_created", "user_id", "milestone_id"],
          include: [
            {
              model: User,
              attributes: ["username"],
            },
          ],
        },
      ],
    });
    const milestones = milestonesData.map(milestone =>
      milestone.get({ plain: true })
    );
    res.render("homepage", {
      milestones,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.json(err);
  }
});

router.get("/milestone/:id", withAuth, async (req, res) => {
  try {
    const milestoneData = await Milestone.findByPk(req.params.id, {
      include: [
        {
          model: Post,
          attributes: ["post_text", "date_created", "user_id", "milestone_id"],
          include: [
            {
              model: User,
              attributes: ["username"],
            },
          ],
        },
      ],
    });

    if (!milestoneData) {
      res.status(404).json({ message: "No milestone found with that id" });
      return;
    }

    const milestone = milestoneData.get({ plain: true });
    res.render("milestone", {
      ...milestone,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.json(err);
  }
});

router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

router.get("/signup", (req, res) => {
  if (!req.session.logged_in) {
    res.render("signup");
    return;
  }

  res.redirect("/");
});

module.exports = router;
