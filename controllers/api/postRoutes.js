const router = require('express').Router();
const { Post } = require('../../models');

router.post('/', async (req, res) => {
  try {
    const newPost = await Post.create({
      post_text: req.body.post_text,
      user_id: req.session.user_id,
      milestone_id: req.body.milestone_id,
    });

    res.status(200).json(newPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const postData = await Post.update(
      {
        post_text: req.body.post_text,
      },
      {
        where: {
          id: req.params.id,
        },
      },
    );

    if (!postData) {
      res.status(404).json({ message: 'No post found with this id' });
      return;
    }
    res.json(postData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const postData = await Post.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!postData) {
      res.status(404).json({ message: 'No post found with this id.' });
      return;
    }

    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
