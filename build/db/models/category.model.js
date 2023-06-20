"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const CATEGORY_TABLE = "categories";
const CategorySchema = {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        field: "id",
    },
    user_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        field: "user_id",
    },
    categoryName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        field: "categoryName",
    },
};
class Category extends sequelize_1.Model {
    static associate(models) {
        Category.hasMany(models.Product, {
            foreignKey: "category_id",
            as: "products",
        });
        Category.hasMany(models.SubCategory, {
            foreignKey: "user_id",
            as: "user",
        });
    }
    static config(sequelize) {
        return {
            sequelize,
            tableName: CATEGORY_TABLE,
            timestamps: true,
        };
    }
}
module.exports = { CATEGORY_TABLE, CategorySchema, Category };
