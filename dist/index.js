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
exports.Cambaceo = void 0;
const ParamSetter_1 = require("./paramSetter/ParamSetter");
const ParamGetter_1 = require("./querys/ParamGetter");
const DbConnection_1 = require("./db/DbConnection");
class Cambaceo {
    setParametters(values) {
        return __awaiter(this, void 0, void 0, function* () {
            this.db = new DbConnection_1.DbConnection();
            this.pool = yield this.db.getConnection();
            const paramGetter = new ParamGetter_1.ParamGetter(this.pool);
            const params = yield paramGetter.getParametters(values);
            const paramSetter = new ParamSetter_1.ParamSetter();
            return yield paramSetter.setParams(params);
        });
    }
    closeConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.db.closeConnection();
        });
    }
}
exports.Cambaceo = Cambaceo;
