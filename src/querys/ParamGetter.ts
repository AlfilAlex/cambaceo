export class ParamGetter {
    pool;
    constructor(pool) {
        this.pool = pool;
    }

    public async getParametters(values: String[]) {
        let query = this.getQuery(values);
        const result = await this.pool.request().query(query);
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
    }

    private getQuery(values: String[]) {
        let formattedValues = values.map((val) => `'${val}'`).join(',');
        let query = `SELECT llave, valor FROM ${process.env.CONFIGURATIONTABLE} WHERE llave IN (${formattedValues});`;
        return query;
    }
}
