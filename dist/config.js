"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getApi = exports.defineConfig = void 0;
const cva_1 = require("cva");
// Global variables to be set by user via `defineConfig()`:
let configured = false;
let api = {
    cva: cva_1.cva,
    cx: cva_1.cx,
    compose: cva_1.compose,
};
/**
 * Define the CloakUI config. You should call this early in the root of your app,
 * before importing utilities from @cloakui/styles or other dependencies that import
 * from @cloakui/styles
 */
const defineConfig = (config) => {
    if (configured && !config)
        return;
    const { cva, cx, compose } = (0, cva_1.defineConfig)(config?.cvaConfig ?? {});
    api = { cva, cx, compose: compose };
    configured = true;
};
exports.defineConfig = defineConfig;
const getApi = () => {
    if (!configured) {
        // user hasn't called defineConfig(), so we do it for them:
        defineConfig();
    }
    return api;
};
exports.getApi = getApi;
