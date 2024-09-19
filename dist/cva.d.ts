import { CX, type CVA } from "cva";
import { ClassObject, Compose } from "./types";
export declare const cva: CVA;
export declare const cx: CX;
export declare const compose: Compose;
/**
 * A wrapper function around `cx` that handles merging className objects, where each key in each object references a classList (or a nested class object).
 */
export declare function cxDeep<T extends ClassObject = ClassObject>(...objects: T[]): T;
