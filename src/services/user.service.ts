export {};
const { models } = require("./../libs/sequelize");

class UsersService {
  constructor() {}

  async find() {
    return await models.User.findAll();
  }

  async findOne(id: number) {
    return await models.User.findByPk(id);
  }

  async create(data: object) {
    return await models.User.create(data);
  }

  async update(id: number, changes: object) {
    const user = await models.User.findByPk(id);
    return await user.update(changes);
  }

  async delete(id: number) {
    return await models.User.destroy({ where: { id } });
  }

  async findOneByEmail(email: string) {
    return await models.User.findOne({ where: { email } });
  }
}

module.exports = UsersService;
