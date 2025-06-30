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
declare const defineConfig: (config?: CloakUI_Config) => void;
declare const getUserConfiguredApi: () => CloakUI_API;
export { defineConfig, getUserConfiguredApi };
