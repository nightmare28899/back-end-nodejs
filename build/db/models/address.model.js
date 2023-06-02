"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const ADDRESS_TABLE = 'addresses';
const AddressSchema = {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        field: 'id'
    },
    user_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        field: 'user_id',
    },
    first_name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        field: 'first_name',
    },
    last_name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        field: 'last_name',
    },
    company: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        field: 'company',
    },
    address: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        field: 'address',
    },
    city: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        field: 'city',
    },
    country: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        field: 'country',
    },
    postal_code: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        field: 'postal_code',
    },
    description: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        field: 'description',
    },
    phone: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        field: 'phone',
    }
};
class Address extends sequelize_1.Model {
    static associate(models) {
        Address.belongsTo(models.User, {
            foreignKey: 'user_id',
            as: 'user'
        });
    }
    static config(sequelize) {
        return {
            sequelize,
            tableName: ADDRESS_TABLE,
            modelName: 'Address',
            timestamps: true
        };
    }
}
module.exports = { ADDRESS_TABLE, AddressSchema, Address };
