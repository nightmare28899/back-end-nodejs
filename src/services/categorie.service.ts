export {};
const { models } = require('./../libs/sequelize');

class CategoriesService {
    constructor() {}
    
    async find() {
        return await models.Category.findAll({ order: [['id', 'DESC']],/*  limit: 10, offset: 1 */ });
    }
    
    async findOne(id: number) {
        return await models.Category.findByPk(id);
    }
    
    async create(data: object) {
        return await models.Category.create(data);
    }
    
    async update(id: number, changes: object) {
        const category = await models.Category.findByPk(id);
        return await category.update(changes);
    }
    
    async delete(id: number) {
        return await models.Category.destroy({ where: { id } });
    }
}

module.exports = CategoriesService;