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
class AddressService {
    constructor() { }
    find() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield models.Address.findAll({ order: [["id", "DESC"]] });
        });
    }
    findOne(user_id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield models.Address.findOne({ where: { user_id } });
        });
    }
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield models.Address.create(data);
        });
    }
    update(user_id, changes) {
        return __awaiter(this, void 0, void 0, function* () {
            const address = yield models.Address.findOne({ where: { user_id } });
            return yield address.update(changes);
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield models.Address.destroy({ where: { id } });
        });
    }
}
module.exports = AddressService;
