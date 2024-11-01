import { cva } from "./cva";
export const buttonStyles = cva({
    base: "[text-shadow:none] inline-flex items-center justify-center whitespace-nowrap rounded-sm text-[13px] 2xl:text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-focus disabled:pointer-events-none disabled:opacity-50 btn",
    variants: {
        size: {
            default: "h-9 px-4 py-2",
            sm: "h-8 px-3 text-xs",
            lg: "h-10 px-8 text-base",
            icon: "size-9",
        },
        variant: {
            default: "bg-primary text-primary shadow-sm hover:bg-primary/90 btn-default",
            destructive: "bg-destructive text-destructive shadow-sm hover:bg-destructive/90 btn-destructive",
            outline: "text-root border border-root-dim bg-transparent shadow-sm hover:bg-root-dim hover:text-root-dim btn-outline",
            secondary: "bg-root-dim text-root-vivid shadow-sm border border-root-dim hover:bg-root-dim/80 btn-secondary",
            ghost: "text-root px-0 hover:text-root-dim btn-ghost",
            link: "text-link px-0 underline-offset-4 hover:underline btn-link",
        },
    },
    defaultVariants: {
        variant: "default",
        size: "default",
    },
});
