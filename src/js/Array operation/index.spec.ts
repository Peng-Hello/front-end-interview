import { describe, it, expect } from "vitest";

const roster = ["小明", "小红"];

describe("操作 JS 数组方法", () => {
  it("push 方法", () => {
    roster.push("小黄");
    expect(roster).toStrictEqual(["小明", "小红", "小黄"]);
  });

  it("pop 方法", () => {
    roster.pop();
    expect(roster).toStrictEqual(["小明", "小红"]);
  });
});
