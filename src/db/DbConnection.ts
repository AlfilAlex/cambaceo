import { DbConnectionConfig } from './types';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const sql = require('mssql');

export class DbConnection {
    dbsc: DbConnectionConfig;
    pool;
    constructor() {
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

    public getConnection = async () => {
        const appPool = new sql.ConnectionPool(this.dbsc);
        this.pool = await appPool.connect();
        return this.pool;
    };

    public closeConnection = async () => {
        await this.pool.close();
    };
}
