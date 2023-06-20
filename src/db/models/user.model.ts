import { Model, DataTypes, Sequelize } from "sequelize";
const USER_TABLE = "users";

const UserSchema = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
    field: "id",
  },
  username: {
    type: DataTypes.STRING,
    field: "username",
    allowNull: true,
    unique: true,
    validate: {
      len: [3, 20],
    },
  },
  email: {
    type: DataTypes.STRING,
    field: "email",
    unique: true,
    allowNull: true,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: DataTypes.STRING,
    field: "password",
    allowNull: true,
  },
  remember_token: {
    type: DataTypes.STRING,
    field: "remember_token",
    allowNull: true,
  },
};

class User extends Model {
  static associate(models: any) {
    User.hasMany(models.Product, {
      foreignKey: "user_id",
      as: "products",
    });
  }

  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: USER_TABLE,
      modelName: "User",
      timestamps: true,
    };
  }
}

module.exports = { USER_TABLE, UserSchema, User };
