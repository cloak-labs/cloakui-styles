import { getApi } from "./config";
import { CX, type CVA } from "cva";
import { ClassObject, ClassValue, Compose } from "./types";

// We export wrappers around cva/cx/compose that act as getters for our user-configured cva/cx/compose functions
export const cva: CVA = (props) => getApi().cva(props);
export const cx: CX = (...inputs) => getApi().cx(...inputs);
export const compose: Compose = (...args) => getApi().compose(...args);

function isClassObject<T>(obj: any): obj is T {
  return obj && typeof obj === "object" && !Array.isArray(obj);
}

/**
 * A wrapper function around `cx` that handles merging className objects, where each key in each object references a classList (or a nested class object).
 */
export function cxDeep<T extends ClassObject = ClassObject>(
  ...objects: T[]
): T {
  const merged: T = {} as T;

  for (const obj of objects) {
    for (const key in obj) {
      if (isClassObject(obj[key])) {
        if (merged[key] && isClassObject(merged[key])) {
          merged[key] = cxDeep(merged[key] as T, obj[key] as T) as T[Extract<
            keyof T,
            string
          >];
        } else {
          merged[key] = cxDeep(obj[key] as T) as T[Extract<keyof T, string>];
        }
      } else {
        if (merged[key]) {
          merged[key] = cx(
            merged[key] as ClassValue,
            obj[key] as ClassValue
          ) as T[Extract<keyof T, string>];
        } else {
          merged[key] = obj[key];
        }
      }
    }
  }

  return merged;
}
