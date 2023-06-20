import { Model, DataTypes, Sequelize } from "sequelize";
const ADDRESS_TABLE = "addresses";

const AddressSchema = {
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
  first_name: {
    type: DataTypes.STRING,
    allowNull: false,
    field: "first_name",
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false,
    field: "last_name",
  },
  company: {
    type: DataTypes.STRING,
    allowNull: false,
    field: "company",
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
    field: "address",
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false,
    field: "city",
  },
  country: {
    type: DataTypes.STRING,
    allowNull: false,
    field: "country",
  },
  postal_code: {
    type: DataTypes.STRING,
    allowNull: false,
    field: "postal_code",
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
    field: "description",
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
    field: "phone",
  },
};

class Address extends Model {
  static associate(models: any) {
    Address.belongsTo(models.User, {
      foreignKey: "user_id",
      as: "user",
    });
  }

  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: ADDRESS_TABLE,
      modelName: "Address",
      timestamps: true,
    };
  }
}

module.exports = { ADDRESS_TABLE, AddressSchema, Address };
