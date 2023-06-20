import { Model, DataTypes, Sequelize } from "sequelize";
const CATEGORY_TABLE = "categories";

const CategorySchema = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
    field: "id",
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "user_id",
  },
  categoryName: {
    type: DataTypes.STRING,
    allowNull: false,
    field: "categoryName",
  },
};

class Category extends Model {
  static associate(models: any) {
    Category.hasMany(models.Product, {
      foreignKey: "category_id",
      as: "products",
    });

    Category.hasMany(models.SubCategory, {
      foreignKey: "user_id",
      as: "user",
    });
  }

  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: CATEGORY_TABLE,
      timestamps: true,
    };
  }
}

module.exports = { CATEGORY_TABLE, CategorySchema, Category };
