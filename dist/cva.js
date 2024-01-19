"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compose = exports.cx = exports.cva = void 0;
const cva_1 = require("cva");
const tailwind_merge_1 = require("tailwind-merge");
const { cva, cx, compose: cvaCompose, } = (0, cva_1.defineConfig)({
    hooks: {
        onComplete: (className) => (0, tailwind_merge_1.twMerge)(className),
    },
});
exports.cva = cva;
exports.cx = cx;
// assert to our own Compose type to fix cva bug. Issue here: https://github.com/joe-bell/cva/issues/256 (hopefully cva publishes a fix so we don't have to do this)
const compose = cvaCompose;
exports.compose = compose;
