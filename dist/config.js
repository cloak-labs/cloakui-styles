"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getApi = exports.defineConfig = void 0;
const cva_1 = require("cva");
// Global variables to be set by user via `defineConfig()`:
let configured = false;
let api = {
    cva: () => {
        throw new Error("You must call defineConfig() before using this function.");
    },
    cx: () => {
        throw new Error("You must call defineConfig() before using this function.");
    },
    compose: () => {
        throw new Error("You must call defineConfig() before using this function.");
    },
};
/**
 * Define the CloakUI config. You should call this early in the root of your app,
 * before importing utilities from @cloakui/styles or other dependencies that import
 * from @cloakui/styles
 */
const defineConfig = (config) => {
    if (configured)
        return; // can only be configured once
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
