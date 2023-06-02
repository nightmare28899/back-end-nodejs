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
const CategoriesService = require("./../services/categorie.service");
const router = express_1.default.Router();
const service = new CategoriesService();
router.get("/", (_req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const categories = yield service.find();
        res.json(categories);
    }
    catch (err) {
        next(err);
    }
}));
router.get("/by_id/:id", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const category = yield service.findOne(Number(req.params.id));
        res.json(category);
    }
    catch (err) {
        next(err);
    }
}));
router.get("/by_category/:user_id", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const category = yield service.findAll(Number(req.params.user_id));
        res.json(category);
    }
    catch (err) {
        next(err);
    }
}));
router.get("/by_userid/:user_id", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const category = yield service.findAll(Number(req.params.user_id));
        res.json(category);
    }
    catch (err) {
        next(err);
    }
}));
router.post("/", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const createdCategory = yield service.create(req.body);
        res.json(createdCategory);
    }
    catch (err) {
        next(err);
    }
}));
router.patch("/:categoryId", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedCategory = yield service.update(Number(req.params.categoryId), req.body);
        res.json(updatedCategory);
    }
    catch (err) {
        next(err);
    }
}));
router.delete("/:categoryId", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedCategory = yield service.delete(Number(req.params.categoryId));
        res.json(deletedCategory);
    }
    catch (err) {
        next(err);
    }
}));
module.exports = router;
