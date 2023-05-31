"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ProductsService = require("./../services/product.service");
const router = express_1.default.Router();
const service = new ProductsService();
router.get("/", (_req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        /* const products = getPagingData(await service.find(), _req.query.page, _req.query.limit); */
        const products = yield service.find();
        res.json(products);
    }
    catch (err) {
        next(err);
    }
}));
router.get("/:productId", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = yield service.findOne(Number(req.params.productId));
        res.json(product);
    }
    catch (err) {
        next(err);
    }
}));
router.post("/", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const createdProduct = yield service.create(req.body);
        res.json(createdProduct);
    }
    catch (err) {
        next(err);
    }
}));
router.patch("/:productId", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedProduct = yield service.update(Number(req.params.productId), req.body);
        res.json(updatedProduct);
    }
    catch (err) {
        next(err);
    }
}));
router.delete("/:productId", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedProduct = yield service.delete(Number(req.params.productId));
        res.json(deletedProduct);
    }
    catch (err) {
        next(err);
    }
}));
/* const getPagingData = (data: any, page: any, limit: any) => {
  const { count: totalItems, rows: tutorials } = data;
  const currentPage = page ? +page : 0;
  const totalPages = Math.ceil(totalItems / limit);

  return { totalItems, tutorials, totalPages, currentPage };
}; */
module.exports = router;
