import * as loremData from "../data/lorem.data";
import * as utils from "./utils.functions";

export const paragraph = () => utils.randomArrayItem(loremData.paragraphs);

export const sentence = (min: number, max: number, capitalize = true) => {
  if (min > max) throw new Error("Error min/max number of words");
  const n = utils.randomNumber(min, max);
  let str = "";
  for (let i = 1; i <= n; i++) {
    str += utils.randomArrayItem(loremData.words) + (i === n ? "" : " ");
  }
  if (capitalize) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  } else {
    return str;
  }
};
