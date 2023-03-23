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
        allowNull: false,
        field: 'email',
        unique: true
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        field: 'password'
    },
};
class User extends sequelize_1.Model {
    /* static associate(models: any) {
        User.hasMany(models.Product, {
            foreignKey: 'user_id',
            as: 'products'
        });
    } */
    static config(sequelize) {
        return {
            sequelize,
            tableName: USER_TABLE,
            timestamps: true
        };
    }
}
module.exports = { USER_TABLE, UserSchema, User };
