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
class UsersService {
    constructor() { }
    find() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield models.User.findAll();
        });
    }
    findOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield models.User.findByPk(id);
        });
    }
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield models.User.create(data);
        });
    }
    update(id, changes) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield models.User.findByPk(id);
            return yield user.update(changes);
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield models.User.destroy({ where: { id } });
        });
    }
    findOneByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield models.User.findOne({ where: { email } });
        });
    }
    findOneByUsername(username) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield models.User.findOne({ where: { username } });
        });
    }
    findOneByToken(remember_token) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield models.User.findOne({ where: { remember_token } });
        });
    }
}
module.exports = UsersService;
