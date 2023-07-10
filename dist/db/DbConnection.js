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
exports.DbConnection = void 0;
const sql = require('mssql');
class DbConnection {
    constructor() {
        this.getConnection = () => __awaiter(this, void 0, void 0, function* () {
            const appPool = new sql.ConnectionPool(this.dbsc);
            this.pool = yield appPool.connect();
            return this.pool;
        });
        this.closeConnection = () => __awaiter(this, void 0, void 0, function* () {
            yield this.pool.close();
        });
        this.dbsc = {
            user: process.env.DB_USER,
            password: process.env.DB_PWD,
            server: process.env.DB_SERVER,
            database: process.env.DB_DATABASE,
            port: Number(process.env.PORT) || 1433,
            options: {
                encrypt: false,
                trustServerCertificate: false,
            },
        };
    }
}
exports.DbConnection = DbConnection;
