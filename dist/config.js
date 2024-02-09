import { defineConfig as defineCVAConfig, cva, cx, compose, } from "cva";
// Global variables to be set by user via `defineConfig()`:
let configured = false;
let api = {
    cva,
    cx,
    compose,
};
/**
 * Define the CloakUI config. You should call this early in the root of your app,
 * before importing utilities from @cloakui/styles or other dependencies that import
 * from @cloakui/styles
 */
const defineConfig = (config) => {
    if (configured && !config)
        return;
    const { cva, cx, compose } = defineCVAConfig(config?.cvaConfig ?? {});
    api = { cva, cx, compose: compose };
    configured = true;
};
const getApi = () => {
    if (!configured) {
        // user hasn't called defineConfig(), so we do it for them:
        defineConfig();
    }
    return api;
};
export { defineConfig, getApi };
