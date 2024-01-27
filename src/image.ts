import { type VariantProps } from "cva";
import { cva } from "./cva";

export const imageStyles = cva({
  base: "peer relative w-full object-cover",
});

// Not really important until we add `variants` to imageStyles:
export type ImageVariants = VariantProps<typeof imageStyles>;

export const imageCaptionStyles = cva({
  base: "text-sm italic mt-2.5",
  variants: {
    variant: {
      default: "",
      showOnHover:
        "opacity-0 h-fit group-hover:opacity-100 transition-all duration-100 ease-in-out px-2 py-0.5 absolute bottom-2 bg-root/80 backdrop-blur-sm border border-root/30 rounded-md text-root",
    },
    align: {
      left: "", // see compoundVariants
      center: "", // see compoundVariants
    },
  },
  compoundVariants: [
    { variant: "default", align: "left", className: "text-left" },
    { variant: "default", align: "center", className: "mx-auto text-center" },
    {
      variant: "showOnHover",
      align: "center",
      className: "left-1/2 -translate-x-1/2",
    },
    { variant: "showOnHover", align: "left", className: "left-2" },
  ],
  defaultVariants: {
    variant: "default",
    align: "center",
  },
});

export type ImageCaptionVariants = VariantProps<typeof imageCaptionStyles>;
