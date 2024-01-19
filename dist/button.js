"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buttonStyles = void 0;
const cva_1 = require("./cva");
exports.buttonStyles = (0, cva_1.cva)({
    base: "[text-shadow:none] inline-flex items-center justify-center whitespace-nowrap rounded-sm text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-focus disabled:pointer-events-none disabled:opacity-50",
    variants: {
        variant: {
            default: "bg-primary text-primary shadow-sm hover:bg-primary/90",
            destructive: "bg-destructive text-destructive shadow-sm hover:bg-destructive/90",
            outline: "text-root border border-root-dim bg-transparent shadow-sm hover:bg-root-dim hover:text-root-dim",
            secondary: "bg-root-dim text-root-vivid shadow-sm border border-root-dim hover:bg-root-dim/80",
            ghost: "hover:bg-root-dim hover:text-root-dim",
            link: "text-link underline-offset-4 hover:underline",
        },
        size: {
            default: "h-9 px-4 py-2",
            sm: "h-8 px-3 text-xs",
            lg: "h-10 px-8",
            icon: "size-9",
        },
    },
    defaultVariants: {
        variant: "default",
        size: "default",
    },
});
