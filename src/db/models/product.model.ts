import { Model, DataTypes, Sequelize } from 'sequelize';
const PRODUCT_TABLE = 'products';

const ProductSchema = {	
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        field: 'id'
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'name'
    },
    price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        field: 'price'
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'description'
    },
    category_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'category_id'
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'stock'
    },
    image: {
        type: DataTypes.TEXT,
        allowNull: false,
        field: 'image'
    }
};

class Product extends Model {
    static associate(models: any) {
        Product.belongsTo(models.Category, {
            foreignKey: 'category_id',
            as: 'category'
        });
    }

    static config(sequelize: Sequelize) {
        return {
            sequelize,
            tableName: PRODUCT_TABLE,
            modelName: 'Product',
            timestamps: true
        };
    }
}

module.exports = { PRODUCT_TABLE, ProductSchema, Product };