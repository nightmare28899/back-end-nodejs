import express from "express";

const ProductsService = require("./../services/product.service");

const router = express.Router();
const service = new ProductsService();

router.get("/", async (_req, res, next) => {
  try {
    /* const products = getPagingData(await service.find(), _req.query.page, _req.query.limit); */
    const products =  await service.find()
    res.json(products);
  } catch (err) {
    next(err);
  }
});

router.get("/:productId", async (req, res, next) => {
  try {
    const product = await service.findOne(Number(req.params.productId));
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

/* const getPagingData = (data: any, page: any, limit: any) => {
  const { count: totalItems, rows: tutorials } = data;
  const currentPage = page ? +page : 0;
  const totalPages = Math.ceil(totalItems / limit);

  return { totalItems, tutorials, totalPages, currentPage };
}; */


module.exports = router;
