"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const PRODUCT_TABLE = 'products';
const ProductSchema = {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        field: 'id'
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        field: 'name'
    },
    price: {
        type: sequelize_1.DataTypes.DECIMAL(10, 2),
        allowNull: false,
        field: 'price'
    },
    description: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        field: 'description'
    },
    category_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        field: 'category_id'
    },
    stock: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        field: 'stock'
    },
    image: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
        field: 'image'
    }
};
class Product extends sequelize_1.Model {
    static associate(models) {
        Product.belongsTo(models.Category, {
            foreignKey: 'category_id',
            as: 'category'
        });
    }
    static config(sequelize) {
        return {
            sequelize,
            tableName: PRODUCT_TABLE,
            modelName: 'Product',
            timestamps: true
        };
    }
}
module.exports = { PRODUCT_TABLE, ProductSchema, Product };
