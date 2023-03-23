import express from "express";

const UsersService = require("./../services/user.service");

const router = express.Router();
const service = new UsersService();

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

router.post("/", async (req, res, next) => {
  try {
    const createdUser = await service.create(req.body);
    res.json(createdUser);
  } catch (err) {
    next(err);
  }
});

router.put("/:userId", async (req, res, next) => {
  try {
    const updatedUser = await service.update(Number(req.params.userId), req.body);
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