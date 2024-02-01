import { type CVA, type CX, defineConfig as defineCVAConfig } from "cva";
import { type Compose } from "./types";
type CloakUI_Config = {
    cvaConfig: Parameters<typeof defineCVAConfig>[0];
};
type CloakUI_API = {
    cva: CVA;
    cx: CX;
    compose: Compose;
};
/**
 * Define the CloakUI config. You should call this early in the root of your app,
 * before importing utilities from @cloakui/styles or other dependencies that import
 * from @cloakui/styles
 */
declare const defineConfig: (config?: CloakUI_Config) => void;
declare const getApi: () => CloakUI_API;
export { defineConfig, getApi };
