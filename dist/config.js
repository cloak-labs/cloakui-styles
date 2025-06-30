import { defineConfig as defineCVAConfig } from "cva";
class ConfigStore {
    constructor() {
        this.configured = false;
        this.api = null;
    }
    static getInstance() {
        if (!ConfigStore.instance) {
            ConfigStore.instance = new ConfigStore();
        }
        return ConfigStore.instance;
    }
    defineConfig(config) {
        if (this.configured && !config)
            return;
        const { cva, cx, compose } = defineCVAConfig(config?.cvaConfig ?? {});
        this.api = { cva, cx, compose: compose };
        this.configured = true;
    }
    getApi() {
        if (!this.configured)
            this.defineConfig();
        return this.api;
    }
}
// Export a functional API surface (maintaining backward compatibility), but use the singleton class internally
const defineConfig = (config) => {
    ConfigStore.getInstance().defineConfig(config);
};
const getUserConfiguredApi = () => {
    return ConfigStore.getInstance().getApi();
};
export { defineConfig, getUserConfiguredApi };
