import assets from "../../static";

export const sortLikes = (likes: string[]): string[] => {
  let sorted: string[] = [];
  likes.sort().forEach(el => {
    if (sorted.includes(el) === false) {
      sorted.push(el);
    }
  });
  return sorted.map((el, i) =>
    i % 2 === 0 ? `${el.toUpperCase()} ` : `${el} `
  );
};

export const splitInThirds = (array: string[]) => {
  let result = [];
  for (let i = 3; i > 0; i--) {
    result.push(array.splice(0, Math.ceil(array.length / i)));
  }
  return result;
};

export const likes = splitInThirds(sortLikes(assets.personalLikes));
