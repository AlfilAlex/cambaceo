import { ParamSetter } from './paramSetter/ParamSetter';
import { ParamGetter } from './querys/ParamGetter';
import { DbConnection } from './db/DbConnection';
export class Cambaceo {
    private pool;
    private db;
    public async setParametters(values: String[]) {
        this.db = new DbConnection();
        this.pool = await this.db.getConnection();
        const paramGetter = new ParamGetter(this.pool);
        const params = await paramGetter.getParametters(values);

        const paramSetter = new ParamSetter();
        return await paramSetter.setParams(params);
    }

    public async closeConnection() {
        await this.db.closeConnection();
    }
}
