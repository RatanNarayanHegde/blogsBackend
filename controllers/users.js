const User = require("../models/user");
const bcrypt = require("bcrypt");

const userRouter = require("express").Router();

userRouter.get("/", async (request, response) => {
  const users = await User.find({});
  return response.json(users);
});

userRouter.post("/", async (request, response) => {
  const { username, password, name } = request.body;

  const existingUser = await User.findOne({ username });
  if (existingUser) {
    return response.status(400).json({
      error: "username must be unique",
    });
  }

  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(password, saltRounds);

  const user = new User({
    username,
    name,
    passwordHash,
  });

  const savedUser = await user.save();

  response.status(201).json(savedUser);
});

module.exports = userRouter;
