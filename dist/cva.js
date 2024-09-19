import { getApi } from "./config";
// We export wrappers around cva/cx/compose that act as getters for our user-configured cva/cx/compose functions
export const cva = (props) => getApi().cva(props);
export const cx = (...inputs) => getApi().cx(...inputs);
export const compose = (...args) => getApi().compose(...args);
function isClassObject(obj) {
    return obj && typeof obj === "object" && !Array.isArray(obj);
}
/**
 * A wrapper function around `cx` that handles merging className objects, where each key in each object references a classList (or a nested class object).
 */
export function cxDeep(...objects) {
    const merged = {};
    for (const obj of objects) {
        for (const key in obj) {
            if (isClassObject(obj[key])) {
                if (merged[key] && isClassObject(merged[key])) {
                    merged[key] = cxDeep(merged[key], obj[key]);
                }
                else {
                    merged[key] = cxDeep(obj[key]);
                }
            }
            else {
                if (merged[key]) {
                    merged[key] = cx(merged[key], obj[key]);
                }
                else {
                    merged[key] = obj[key];
                }
            }
        }
    }
    return merged;
}
