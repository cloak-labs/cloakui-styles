import { type VariantProps } from "cva";
import { cva } from "./cva";

export const separatorStyles = cva({
  base: "h-px w-full border-t",
});

export type SeparatorVariants = VariantProps<typeof separatorStyles>;
