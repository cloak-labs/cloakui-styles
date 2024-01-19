"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.imageCaptionStyles = exports.imageStyles = void 0;
const cva_1 = require("./cva");
exports.imageStyles = (0, cva_1.cva)({
    base: "relative w-full object-cover",
});
exports.imageCaptionStyles = (0, cva_1.cva)({
    base: "text-sm text-center italic mt-2.5",
});
