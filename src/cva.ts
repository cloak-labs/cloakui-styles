import { defineConfig } from "cva";
import { twMerge } from "tailwind-merge";
import { Compose } from "./types";

const {
  cva,
  cx,
  compose: cvaCompose,
} = defineConfig({
  hooks: {
    onComplete: (className) => twMerge(className),
  },
});

// assert to our own Compose type to fix cva bug. Issue here: https://github.com/joe-bell/cva/issues/256 (hopefully cva publishes a fix so we don't have to do this)
const compose = cvaCompose as Compose;

export { cva, cx, compose };
