export class ParamSetter {
    params: String[];
    public async setParams(parameters: Array<{ key: string; value: string }>) {
        parameters.forEach((pair) => {
            process.env[pair.key] = pair.value;
        });

        return true;
    }
}
