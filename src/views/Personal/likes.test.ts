import { sortLikes } from "./likes";

describe("sortLikes", () => {
  it("sorts array of strings alphabetically, converts every other el to uppercase and appends a space to each string", () => {
    const array = ["rabbit", "donkey", "pig", "cat"];
    const result = ["CAT ", "donkey ", "PIG ", "rabbit "];
    expect(sortLikes(array)).toEqual(result);
  });
});
