import {describe, expect, it } from "vitest";
import { compactUtil } from "./compact.util";

describe("compact", () => {
  it("compactUtil", () => {
    expect(compactUtil([null, false, undefined, 0])).toEqual([]);
    expect(compactUtil([1, undefined, null])).toEqual([1]);
  });
});
