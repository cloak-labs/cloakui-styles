import { type VariantProps } from "cva";
import { cva } from "./cva";

export const imageStyles = cva({
  base: "relative w-full object-cover",
});

// Not really important until we add `variants` to imageStyles:
export interface ImageVariants extends VariantProps<typeof imageStyles> {}

export const imageCaptionStyles = cva({
  base: "text-sm text-center italic mt-2.5",
});
