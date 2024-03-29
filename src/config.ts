import {
  type CVA,
  type CX,
  defineConfig as defineCVAConfig,
  cva,
  cx,
  compose,
} from "cva";
import { type Compose } from "./types";

type CloakUI_Config = {
  cvaConfig: Parameters<typeof defineCVAConfig>[0];
};

type CloakUI_API = {
  cva: CVA;
  cx: CX;
  compose: Compose;
};

// Global variables to be set by user via `defineConfig()`:
let configured = false;
let api: CloakUI_API = {
  cva,
  cx,
  compose,
};

/**
 * Define the CloakUI config. You should call this early in the root of your app,
 * before importing utilities from @cloakui/styles or other dependencies that import
 * from @cloakui/styles
 */
const defineConfig = (config?: CloakUI_Config) => {
  if (configured && !config) return;

  const { cva, cx, compose } = defineCVAConfig(config?.cvaConfig ?? {});
  api = { cva, cx, compose: compose as Compose };
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
