import * as utils from "./utils.functions";

export const centsPrice = (min: number = 0, max: number = 99) =>
  utils.randomNumber(min, max) * 100;

export const floatPrice = (min: number = 0, max: number = 99) =>
  utils.randomNumber(min, max).toFixed(2);
