const express = require("express");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const auth = require("../middleware/auth");

const authRouter = express.Router();

authRouter.post("/api/signup", async (req, res) => {
  try {
    const { name, email, profilePic } = req.body;
    //email already exists?
    let user = await User.findOne({ email: email });

    //if no user
    if (!user) {
      user = new User({
        name: name,
        email: email,
        profilePic: profilePic,
      });
      user = await user.save();
    }
    const token = jwt.sign({ id: user._id }, "passwordKey");
    res.json({ user: user, token: token });
  } catch (e) {
    res.json({ error: e.message });
  }
});
authRouter.get("/", auth, async (req, res) => {
  const user = await User.findById(req.user);
  res.json({ user, token: req.token });
});

module.exports = authRouter;
