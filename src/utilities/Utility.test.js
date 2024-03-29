import { joinGenres } from "./Utility";

const cases = [
  [undefined, ""],
  [null, ""],
  [[], ""],
];

describe("joinGenres utility", () => {
  test.each(cases)(
    "given %p as arguments, returns %p",
    (firstArg, expectedResult) => {
      expect(joinGenres(firstArg)).toBe(expectedResult);
    }
  );

  test("given only 1 argument, it should NOT return & concatenator", () => {
    const fakeGenres = [{ name: "Documentary", id: 2 }];
    expect(joinGenres(fakeGenres)).not.toContain("&");
  });
});
