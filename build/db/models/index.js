"use strict";
const { Product, ProductSchema } = require('./product.model');
const { Category, CategorySchema } = require('./category.model');
const { User, UserSchema } = require('./user.model');
function setupModels(sequelize) {
    Product === null || Product === void 0 ? void 0 : Product.init(ProductSchema, Product.config(sequelize));
    Category === null || Category === void 0 ? void 0 : Category.init(CategorySchema, Category.config(sequelize));
    User === null || User === void 0 ? void 0 : User.init(UserSchema, User.config(sequelize));
}
module.exports = setupModels;
