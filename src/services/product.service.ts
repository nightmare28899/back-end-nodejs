export {};
const { models } = require("./../libs/sequelize");

class ProductsService {
  constructor() {}

  async find() {
    return await models.Product.findAll({
      order: [["id", "DESC"]],
    });
  }

  async findOne(id: number) {
    return await models.Product.findByPk(id);
  }

  async create(data: object) {
    return await models.Product.create(data);
  }

  async update(id: number, changes: object) {
    const product = await models.Product.findByPk(id);
    return await product.update(changes);
  }

  async delete(id: number) {
    return await models.Product.destroy({ where: { id } });
  }

  getPagingData = (data: any, page: any, limit: any) => {
    const { count: totalItems, rows: tutorials } = data;
    const currentPage = page ? +page : 0;
    const totalPages = Math.ceil(totalItems / limit);

    return { totalItems, tutorials, totalPages, currentPage };
  };
}

module.exports = ProductsService;
