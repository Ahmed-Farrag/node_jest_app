const Post = require("./post");
const router = require("express").Router();

// get all posts
router.get("/posts", async (req, res) => {
  const posts = await Post.find();
  res.send(posts);
});
// create post
router.post("/posts", async (req, res) => {
  const post = new Post(req.body);
  await post.save();
  res.send(post);
});
// get one post
router.get("/posts/:id", async (req, res) => {
  try {
    const post = await Post.findOne({ _id: req.params.id });
    res.send(post);
  } catch (e) {
    res.send({ err: "not found" });
  }
});
// edit post
router.patch("/posts/:id", async (req, res) => {
  try {
    let post = await Post.findOne({ _id: req.params.id });
    if (req.body.title) post.title = req.body.title;
    if (req.body.content) post.content = req.body.content;
    await post.save();
    res.send(post);
  } catch (e) {
    res.send({ err: "not found" });
  }
});
// delet post
router.delete("/posts/:id", async (req, res) => {
  try {
    await Post.deleteOne({ _id: req.params.id });
    res.send({});
  } catch (e) {
    res.send({ err: "not found" });
  }
});

module.exports = router;
