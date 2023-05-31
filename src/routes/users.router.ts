import express from "express";

const UsersService = require("./../services/user.service");

const router = express.Router();
const service = new UsersService();
const bcrypt = require("bcrypt");
const saltRounds = 10;

const jwt = require("jsonwebtoken");

router.get("/", async (_req, res, next) => {
  try {
    const users = await service.find();
    res.json(users);
  } catch (err) {
    next(err);
  }
});

router.get("/:userId", async (req, res, next) => {
  try {
    const user = await service.findOne(Number(req.params.userId));
    res.json(user);
  } catch (err) {
    next(err);
  }
});

router.post("/register", async (req, res, next) => {
  try {
    const { password } = req.body;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    req.body.password = hashedPassword;

    const createdUser = await service.create(req.body);
    res.json(createdUser);
  } catch (err) {
    next(err);
  }
});

router.post("/login", async (req, res, _next) => {
  if (req.body.email != "" && req.body.password != "") {
    const user = await service.findOneByEmail(req.body.email);
    if (user) {
      let jwtSecretKey = process.env.JWT_SECRET_KEY;
      let data = {
        time: Date(),
        userId: 12,
      };

      const token = jwt.sign(data, jwtSecretKey);
      let obj = {
        _token: token,
        user: user,
      };

      const result = await bcrypt.compare(req.body.password, user.password);

      if (result) {
        res.send(obj);
      } else {
        res.status(200).json({ message: "The password is incorrect" });
      }
    } else {
      res.status(200).json({ message: "The email is incorrect or does not exist" });
    }
  } else {
    res.status(200).json({ message: "Email or password is empty." });
  }
});

router.put("/:userId", async (req, res, next) => {
  try {
    const updatedUser = await service.update(
      Number(req.params.userId),
      req.body
    );
    res.json(updatedUser);
  } catch (err) {
    next(err);
  }
});

router.delete("/:userId", async (req, res, next) => {
  try {
    const deletedUser = await service.delete(Number(req.params.userId));
    res.json(deletedUser);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
