"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const { models } = require("./../libs/sequelize");
class ProductsService {
    constructor() {
        this.getPagingData = (data, page, limit) => {
            const { count: totalItems, rows: tutorials } = data;
            const currentPage = page ? +page : 0;
            const totalPages = Math.ceil(totalItems / limit);
            return { totalItems, tutorials, totalPages, currentPage };
        };
    }
    find() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield models.Product.findAll({
                order: [["id", "DESC"]],
            });
        });
    }
    findAll(user_id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield models.Product.findAll({ where: { user_id } });
        });
    }
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const idProduct = (yield models.Product.count()) != 0 ? (data["id"] = (yield models.Product.count()) + 1) : 1;
            data["id"] = idProduct;
            return yield models.Product.create(data);
        });
    }
    update(id, changes) {
        return __awaiter(this, void 0, void 0, function* () {
            const product = yield models.Product.findByPk(id);
            return yield product.update(changes);
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield models.Product.destroy({ where: { id } });
        });
    }
}
module.exports = ProductsService;
