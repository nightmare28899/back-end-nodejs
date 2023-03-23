import express from "express";

const CategoriesService = require("./../services/categorie.service");

const router = express.Router();
const service = new CategoriesService();

router.get("/", async (_req, res, next) => {
  try {
    const categories = await service.find();
    res.json(categories);
  } catch (err) {
    next(err);
  }
});

router.get("/:categoryId", async (req, res, next) => {
  try {
    const category = await service.findOne(Number(req.params.categoryId));
    res.json(category);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const createdCategory = await service.create(req.body);
    res.json(createdCategory);
  } catch (err) {
    next(err);
  }
});

router.patch("/:categoryId", async (req, res, next) => {
  try {
    const updatedCategory = await service.update(Number(req.params.categoryId), req.body);
    res.json(updatedCategory);
  } catch (err) {
    next(err);
  }
});

router.delete("/:categoryId", async (req, res, next) => {
  try {
    const deletedCategory = await service.delete(Number(req.params.categoryId));
    res.json(deletedCategory);
  } catch (err) {
    next(err);
  }
});

module.exports = router;