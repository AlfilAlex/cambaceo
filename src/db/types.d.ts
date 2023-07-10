export type DbConnectionConfig = {
    user: string | undefined;
    password: string | undefined;
    server: string | undefined;
    database: string | undefined;
    port: number | undefined;
    pool?: {
        max: number | undefined;
        min: number | undefined;
        idleTimeoutMillis: number | undefined;
    };
    options?: any;
};
