import { getApi } from "./config";
import { CX, type CVA } from "cva";
import { Compose } from "./types";

// We export wrappers around cva/cx/compose that act as getters for our user-configured cva/cx/compose functions
export const cva: CVA = (props) => getApi().cva(props);
export const cx: CX = (...inputs) => getApi().cx(...inputs);
export const compose: Compose = (...args) => getApi().compose(...args);
