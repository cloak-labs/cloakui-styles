"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compose = exports.cx = exports.cva = void 0;
const config_1 = require("./config");
const { cva, cx, compose } = (0, config_1.getApi)();
exports.cva = cva;
exports.cx = cx;
exports.compose = compose;
