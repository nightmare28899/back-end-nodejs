"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const id = joi_1.default.number().required();
const categoryName = joi_1.default.string().required();
const categorySchemaCreate = joi_1.default.object({
    categoryName: categoryName.required(),
});
const categorySchemaUpdate = joi_1.default.object({
    categoryName: categoryName,
});
const categorySchemaId = joi_1.default.object({
    id: id.required()
});
module.exports = { categorySchemaCreate, categorySchemaUpdate, categorySchemaId };
