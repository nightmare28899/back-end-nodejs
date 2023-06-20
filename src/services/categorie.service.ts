export {};
const { models } = require('./../libs/sequelize');

class CategoriesService {
    constructor() {}
    
    async find() {
        return await models.Category.findAll({ order: [['id', 'DESC']] });
    }

    async findOne(id: number) {
        return await models.Category.findOne({ where: { id } });
    }
    
    async findAll(user_id: number) {
        return await models.Category.findAll({ where: { user_id }, order: [['id', 'DESC']] });
    }
    
    async create(data: any) {
        const idCategory = await models.Category.findOne({ order: [['id', 'DESC']] });
        data['id'] = idCategory ? idCategory.id + 1 : 1;
        console.log(data);
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