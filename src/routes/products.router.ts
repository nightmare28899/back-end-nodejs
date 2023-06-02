import express from "express";

const ProductsService = require("./../services/product.service");

const router = express.Router();
const service = new ProductsService();

router.get("/", async (_req, res, next) => {
  try {
    const products =  await service.find()
    res.json(products);
  } catch (err) {
    next(err);
  }
});

router.get("/:user_id", async (req, res, next) => {
  try {
    const product = await service.findAll(Number(req.params.user_id));
    res.json(product);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const createdProduct = await service.create(req.body);
    res.json(createdProduct);
  } catch (err) {
    next(err);
  }
});

router.patch("/:productId", async (req, res, next) => {
  try {
    const updatedProduct = await service.update(Number(req.params.productId), req.body);
    res.json(updatedProduct);
  } catch (err) {
    next(err);
  }
});

router.delete("/:productId", async (req, res, next) => {
  try {
    const deletedProduct = await service.delete(Number(req.params.productId));
    res.json(deletedProduct);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
