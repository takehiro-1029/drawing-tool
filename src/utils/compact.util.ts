import type { Falsy } from "~/interfaces/Utils.interface";

/** 配列内からfalsyな値を除去 */
export const compactUtil = <T>(input: (T | Falsy)[]): T[] => input.filter(Boolean) as T[];
