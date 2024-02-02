"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compose = exports.cx = exports.cva = void 0;
const config_1 = require("./config");
// We export wrappers around cva/cx/compose that act as getters for our user-configured cva/cx/compose functions
const cva = (props) => (0, config_1.getApi)().cva(props);
exports.cva = cva;
const cx = (...inputs) => (0, config_1.getApi)().cx(...inputs);
exports.cx = cx;
const compose = (...args) => (0, config_1.getApi)().compose(...args);
exports.compose = compose;
