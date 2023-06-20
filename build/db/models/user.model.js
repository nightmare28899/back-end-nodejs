"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const USER_TABLE = "users";
const UserSchema = {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        field: "id",
    },
    username: {
        type: sequelize_1.DataTypes.STRING,
        field: "username",
        allowNull: true,
        unique: true,
        validate: {
            len: [3, 20],
        },
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        field: "email",
        unique: true,
        allowNull: true,
        validate: {
            isEmail: true,
        },
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        field: "password",
        allowNull: true,
    },
    remember_token: {
        type: sequelize_1.DataTypes.STRING,
        field: "remember_token",
        allowNull: true,
    },
};
class User extends sequelize_1.Model {
    static associate(models) {
        User.hasMany(models.Product, {
            foreignKey: "user_id",
            as: "products",
        });
    }
    static config(sequelize) {
        return {
            sequelize,
            tableName: USER_TABLE,
            modelName: "User",
            timestamps: true,
        };
    }
}
module.exports = { USER_TABLE, UserSchema, User };
