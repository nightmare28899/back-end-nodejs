"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSchemaId = exports.userSchemaUpdate = exports.userSchemaCreate = void 0;
const joi_1 = __importDefault(require("joi"));
const id = joi_1.default.number().required();
const email = joi_1.default.string().email().required();
const password = joi_1.default.string().required();
exports.userSchemaCreate = joi_1.default.object({
    email: email.required(),
    password: password.required(),
});
exports.userSchemaUpdate = joi_1.default.object({
    email: email,
    password: password,
});
exports.userSchemaId = joi_1.default.object({
    id: id.required()
});
module.exports = { userSchemaCreate: exports.userSchemaCreate, userSchemaUpdate: exports.userSchemaUpdate, userSchemaId: exports.userSchemaId };
