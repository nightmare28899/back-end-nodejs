import { Router } from "express";
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UsersService = require("./../services/user.service");

const router = Router();
const service = new UsersService();
const saltRounds = 10;

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

router.post("/register", async (req, res, _next) => {
  if (
    req.body.username != "" &&
    req.body.email != "" &&
    req.body.password != ""
  ) {
    const username = await service.findOneByUsername(req.body.username);
    const user = await service.findOneByEmail(req.body.email);
    if (username) {
      res.status(200).json({ message: "The username already exists" });
    } else {
      if (user) {
        res.status(201).json({ message: "The email already exists" });
      } else {
        const { password } = req.body;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        req.body.password = hashedPassword;

        const createdUser = await service.create(req.body);
        res.json(createdUser);
      }
    }
  } else {
    res.status(200).json({ message: "Email, Username or Password is empty." });
  }
});

router.post("/login", async (req, res, _next) => {
  if (
    req.body.username != "" ||
    (req.body.email != "" && req.body.password != "")
  ) {
    const username = await service.findOneByUsername(req.body.username);
    const user = await service.findOneByEmail(req.body.email);

    if (user || username) {
      let jwtSecretKey = process.env.JWT_SECRET_KEY;
      let data = {
        time: Date(),
        userId: 12,
      };

      const token = jwt.sign(data, jwtSecretKey);
      let obj = {
        _token: token,
        user: user || username,
      };

      const pass = user ? user.password : username.password;
      const result = await bcrypt.compare(req.body.password, pass);

      if (result) {
        service.update(obj.user.id, { remember_token: token });
        res.send(obj);
      } else {
        res.status(200).json({ message: "The password is incorrect" });
      }
    } else {
      res.status(200).json({
        message: "The email or username is incorrect or does not exist",
      });
    }
  } else {
    res.status(200).json({ message: "Username, email or password is empty." });
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

router.post("/validateToken", async (req, res, next) => {
  try {
    const user = await service.findOneByToken(req.body.remember_token);
    if (user) {
      res.json(user);
    } else {
      res.status(200).json({ message: "The token is invalid" });
    }
  } catch (err) {
    next(err);
  }
});

module.exports = router;
