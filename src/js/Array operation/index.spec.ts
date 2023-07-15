import { describe, it, expect } from "vitest";

const roster = ["小明", "小红"];

describe("操作 JS 数组方法", () => {
  describe("会修改原数组", () => {
    it("push 方法", () => {
      roster.push("小黄");
      expect(roster).toStrictEqual(["小明", "小红", "小黄"]);
    });

    it("pop 方法", () => {
      roster.pop();
      expect(roster).toStrictEqual(["小明", "小红"]);
    });

    describe("sort 方法", () => {
      const alphabetTable = ["c", "d", undefined, "e", "a", "b"];
      it("没有传参", () => {
        const temp = [...alphabetTable]; // 因为 Sort 方法是原地排序的，所以我们拷贝一份出来，以免影响后面测试。
        // 默认排序是将元素转换为字符串，然后按照它们的 UTF-16 码元值升序排序。
        expect(temp.sort()).toStrictEqual(["a", "b", "c", "d", "e", undefined]);
      });
      it("传了排序函数", () => {
        // 所有的 undefined 元素都会被排序到数组的末尾，并且不调用 compareFn
        // a , b 不会是 undefined
        function compareFn(a: any, b: any) {
          if (a > b) {
            return 1; // a > b ，应该返回 >0 , a 往后走
          }
          if (a < b) {
            return -1; // 负数往前走
          }
          // a=b , 保持 ab 位置
          return 0;
        }
        expect(alphabetTable.sort(compareFn)).toStrictEqual([
          "a",
          "b",
          "c",
          "d",
          "e",
          undefined,
        ]);
      });
    });
  });
});
