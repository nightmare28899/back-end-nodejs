"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const id = joi_1.default.number().required();
const name = joi_1.default.string().required();
const price = joi_1.default.number().required().min(1);
const description = joi_1.default.string().required().min(10).max(100);
const category_id = joi_1.default.number().required();
const stock = joi_1.default.number().required().min(1);
const image = joi_1.default.string().required();
const productSchemaCreate = joi_1.default.object({
    name: name.required(),
    price: price.required(),
    description: description.required(),
    category_id: category_id.required(),
    stock: stock.required(),
    image: image.required()
});
const productSchemaUpdate = joi_1.default.object({
    name: name,
    price: price,
    description: description,
    category_id: category_id,
    stock: stock,
    image: image
});
const productSchemaId = joi_1.default.object({
    id: id.required()
});
module.exports = { productSchemaCreate, productSchemaUpdate, productSchemaId };
