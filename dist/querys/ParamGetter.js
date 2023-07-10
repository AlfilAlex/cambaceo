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
exports.ParamGetter = void 0;
class ParamGetter {
    constructor(pool) {
        this.pool = pool;
    }
    getParametters(values) {
        return __awaiter(this, void 0, void 0, function* () {
            let query = this.getQuery(values);
            const result = yield this.pool.request().query(query);
            const parameters = result.recordset;
            return parameters.map((keyValuePair) => {
                let result;
                const key = keyValuePair.llave;
                const value = keyValuePair.valor;
                const type = typeof value;
                switch (type) {
                    case 'string':
                        result = { key, value: String(value) };
                        break;
                    case 'number':
                        result = { key, value: Number(value) };
                        break;
                    case 'undefined':
                        result = { key, value: undefined };
                        break;
                    case 'boolean':
                        result = { key, value: !!value };
                        break;
                    default:
                        break;
                }
                return result;
            });
        });
    }
    getQuery(values) {
        let formattedValues = values.map((val) => `'${val}'`).join(',');
        let query = `SELECT llave, valor FROM ${process.env.CONFIGURATIONTABLE} WHERE llave IN (${formattedValues});`;
        return query;
    }
}
exports.ParamGetter = ParamGetter;
