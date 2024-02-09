import { getApi } from "./config";
// We export wrappers around cva/cx/compose that act as getters for our user-configured cva/cx/compose functions
export const cva = (props) => getApi().cva(props);
export const cx = (...inputs) => getApi().cx(...inputs);
export const compose = (...args) => getApi().compose(...args);
