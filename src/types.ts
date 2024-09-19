import { CVA, VariantProps } from "cva";
import { cx } from "./cva";

export type ClassValue = Parameters<typeof cx>[0];

export type ClassObject = { [key: string]: ClassValue | ClassObject };

type CVAClassProp =
  | {
      class?: ClassValue;
      className?: never;
    }
  | {
      class?: never;
      className?: ClassValue;
    };

type MergeVariantProps<Types extends any[]> = Types extends [
  infer First,
  ...infer Rest
]
  ? First extends object
    ? Rest extends any[]
      ? {
          [K in
            | keyof First
            | keyof MergeVariantProps<Rest>]: K extends keyof First
            ? K extends keyof MergeVariantProps<Rest>
              ? First[K] | Exclude<MergeVariantProps<Rest>[K], First[K]>
              : First[K]
            : K extends keyof MergeVariantProps<Rest>
            ? MergeVariantProps<Rest>[K]
            : never;
        }
      : never
    : never
  : {};

export interface Compose {
  <T extends ReturnType<CVA>[]>(...components: T): (
    props?: Partial<MergeVariantProps<{ [K in keyof T]: VariantProps<T[K]> }>> &
      CVAClassProp
  ) => string;
}
