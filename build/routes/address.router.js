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
const AddressService = require("./../services/address.service");
const router = express_1.default.Router();
const service = new AddressService();
router.get("/", (_req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const address = yield service.find();
        res.json(address);
    }
    catch (err) {
        next(err);
    }
}));
router.get("/:user_id", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const address = yield service.findOne(Number(req.params.user_id));
        res.json(address);
    }
    catch (err) {
        next(err);
    }
}));
router.post("/", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const createdAddress = yield service.create(req.body);
        res.json(createdAddress);
    }
    catch (err) {
        next(err);
    }
}));
router.patch("/:addressId", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedAddress = yield service.update(Number(req.params.addressId), req.body);
        res.json(updatedAddress);
    }
    catch (err) {
        next(err);
    }
}));
router.delete("/:addressId", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedAddress = yield service.delete(Number(req.params.addressId));
        res.json(deletedAddress);
    }
    catch (err) {
        next(err);
    }
}));
module.exports = router;
