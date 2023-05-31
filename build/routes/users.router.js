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
const UsersService = require("./../services/user.service");
const router = express_1.default.Router();
const service = new UsersService();
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");
router.get("/", (_req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield service.find();
        res.json(users);
    }
    catch (err) {
        next(err);
    }
}));
router.get("/:userId", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield service.findOne(Number(req.params.userId));
        res.json(user);
    }
    catch (err) {
        next(err);
    }
}));
router.post("/register", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { password } = req.body;
        const hashedPassword = yield bcrypt.hash(password, saltRounds);
        req.body.password = hashedPassword;
        const createdUser = yield service.create(req.body);
        res.json(createdUser);
    }
    catch (err) {
        next(err);
    }
}));
router.post("/login", (req, res, _next) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.body.email != "" && req.body.password != "") {
        const user = yield service.findOneByEmail(req.body.email);
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
            const result = yield bcrypt.compare(req.body.password, user.password);
            if (result) {
                res.send(obj);
            }
            else {
                res.status(200).json({ message: "The password is incorrect" });
            }
        }
        else {
            res.status(200).json({ message: "The email is incorrect or does not exist" });
        }
    }
    else {
        res.status(200).json({ message: "Email or password is empty." });
    }
}));
router.put("/:userId", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedUser = yield service.update(Number(req.params.userId), req.body);
        res.json(updatedUser);
    }
    catch (err) {
        next(err);
    }
}));
router.delete("/:userId", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedUser = yield service.delete(Number(req.params.userId));
        res.json(deletedUser);
    }
    catch (err) {
        next(err);
    }
}));
module.exports = router;
