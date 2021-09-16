const router = require("express").Router();
const { User } = require("../../models");

router.post("/", async (req, res) => {
  try {
    const userData = await User.create({
      username: req.body.username,
      password: req.body.password,
      email: req.body.email,
    });

    req.session.save(() => {
      req.session.user_id = userData;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    const userData = await User.findOne({
      where: { username: req.body.username },
    });

    if(!userData){
        res.status(404).json({message: 'No user found with that username.'});
        return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if(!validPassword) {
        res.status(400).json({message: 'Incorrect username or password, please try again'});
        return;
    }

    req.session.save(() => {
        req.session.logged_in = true;
        req.session.user_id = userData.id;

        res.json({user: userData, message: 'You are now logged in.'});
    });
  } catch (err) {
      res.status(400).json(err);
  }
});

