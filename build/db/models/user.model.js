"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const USER_TABLE = 'users';
const UserSchema = {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        field: 'id'
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        field: 'email',
        unique: true,
        allowNull: false,
        validate: {
            isEmail: true
        }
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        field: 'password',
        allowNull: false,
    },
};
class User extends sequelize_1.Model {
    static associate(models) {
        User.hasMany(models.Product, {
            foreignKey: 'user_id',
            as: 'products'
        });
    }
    static config(sequelize) {
        return {
            sequelize,
            tableName: USER_TABLE,
            modelName: 'User',
            timestamps: true
        };
    }
}
module.exports = { USER_TABLE, UserSchema, User };
