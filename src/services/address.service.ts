export {};
const { models } = require('./../libs/sequelize');

class AddressService {
    constructor() {}
    
    async find() {
        return await models.Address.findAll({ order: [['id', 'DESC']] });
    }
    
    async findOne(user_id: number) {
        return await models.Address.findOne({ where: { user_id } });
    }
    
    async create(data: object) {
        return await models.Address.create(data);
    }
    
    async update(user_id: number, changes: object) {
        const address = await models.Address.findOne({ where: { user_id } });
        return await address.update(changes);
    }
    
    async delete(id: number) {
        return await models.Address.destroy({ where: { id } });
    }
}

module.exports = AddressService;