const { Product, ProductSchema } = require('./product.model');
const { Category, CategorySchema } = require('./category.model');
const { User, UserSchema } = require('./user.model');

function setupModels(sequelize: any) {
  Product?.init(ProductSchema, Product.config(sequelize));
  Category?.init(CategorySchema, Category.config(sequelize));
  User?.init(UserSchema, User.config(sequelize));
}

module.exports = setupModels;
