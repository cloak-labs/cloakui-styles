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

class ConfigStore {
  private static instance: ConfigStore;
  private configured = false;
  private api: CloakUI_API | null = null;

  private constructor() {}

  static getInstance(): ConfigStore {
    if (!ConfigStore.instance) {
      ConfigStore.instance = new ConfigStore();
    }
    return ConfigStore.instance;
  }

  defineConfig(config?: CloakUI_Config) {
    if (this.configured && !config) return;

    const { cva, cx, compose } = defineCVAConfig(config?.cvaConfig ?? {});
    this.api = { cva, cx, compose: compose as Compose };
    this.configured = true;
  }

  getApi(): CloakUI_API {
    if (!this.configured) this.defineConfig();
    return this.api!;
  }
}

// Export a functional API surface (maintaining backward compatibility), but use the singleton class internally
const defineConfig = (config?: CloakUI_Config) => {
  ConfigStore.getInstance().defineConfig(config);
};

const getUserConfiguredApi = () => {
  return ConfigStore.getInstance().getApi();
};

export { defineConfig, getUserConfiguredApi };
