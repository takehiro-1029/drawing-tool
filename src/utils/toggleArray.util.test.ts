import { describe, expect, it } from "vitest";
import { toggleArray } from "./toggleArray.util";

describe("toggleArray", () => {
  it("存在する値の場合は削除", () => {
    expect(toggleArray([1, 2, 3], 1)).toEqual([2, 3]);
  });
  it("存在しない値の場合は追加", () => {
    expect(toggleArray([1, 2, 3], 4)).toEqual([1, 2, 3, 4]);
  });
});
