import express from "express";

const AddressService = require("./../services/address.service");

const router = express.Router();
const service = new AddressService();

router.get("/", async (_req, res, next) => {
  try {
    const address = await service.find();
    res.json(address);
  } catch (err) {
    next(err);
  }
});

router.get("/:user_id", async (req, res, next) => {
  try {
    const address = await service.findOne(Number(req.params.user_id));
    res.json(address);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const createdAddress = await service.create(req.body);
    res.json(createdAddress);
  } catch (err) {
    next(err);
  }
});

router.patch("/:addressId", async (req, res, next) => {
  try {
    const updatedAddress = await service.update(
      Number(req.params.addressId),
      req.body
    );
    res.json(updatedAddress);
  } catch (err) {
    next(err);
  }
});

router.delete("/:addressId", async (req, res, next) => {
  try {
    const deletedAddress = await service.delete(Number(req.params.addressId));
    res.json(deletedAddress);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
