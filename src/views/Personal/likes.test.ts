import { sortLikes, splitInThirds } from "./likes";

describe("sortLikes", () => {
  it("sorts array of strings alphabetically, converts every other el to uppercase and appends a space to each string", () => {
    const array: string[] = ["rabbit", "donkey", "pig", "cat"];
    const result = ["CAT ", "donkey ", "PIG ", "rabbit "];
    expect(sortLikes(array)).toEqual(result);
  });

  it("returns an array with duplicates removed", () => {
    const array: string[] = ["pig", "rabbit", "donkey", "pig", "cat", "cat"];
    const result = ["CAT ", "donkey ", "PIG ", "rabbit "];
    expect(sortLikes(array)).toEqual(result);
  });
});

describe("splitInThirds", () => {
  it("splits uneven array of strings into three equal arrays", () => {
    const array: string[] = ["rabbit", "donkey", "pig", "cat", "mouse"];
    const result: string[][] = [
      ["rabbit", "donkey"],
      ["pig", "cat"],
      ["mouse"]
    ];
    expect(splitInThirds(array)).toEqual(result);
  });

  it("splits even array of strings into three equal arrays", () => {
    const array: string[] = ["a", "b", "c", "d", "e", "f", "h", "i", "j"];
    const result: string[][] = [
      ["a", "b", "c"],
      ["d", "e", "f"],
      ["h", "i", "j"]
    ];
    expect(splitInThirds(array)).toEqual(result);
  });

  it("returns an array of empty arrays", () => {
    const array: string[] = [];
    const result: string[][] = [[], [], []];
    expect(splitInThirds(array)).toEqual(result);
  });
});
