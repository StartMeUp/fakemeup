import * as dateData from "../data/date.data";
import * as utils from "./utils.functions";

export const year = (
  min: number = 1969,
  max: number = new Date().getFullYear()
) => utils.randomNumber(min, max);

const makeDate = (minYear?: number, maxYear?: number) =>
  new Date(
    year(minYear, maxYear),
    utils.randomNumber(1, 12),
    utils.randomNumber(1, 28)
  );

export const day = (length: "long" | "short" | "num" = "long"): string =>
  utils.randomArrayItem(dateData.days[length]);

export const month = (length: "long" | "short" | "num" = "long"): string =>
  utils.randomArrayItem(dateData.months[length]);

export const full = (
  format: "slash" | "dash" | "full" = "full",
  minYear?: number,
  maxYear?: number
) => {
  const d = makeDate(minYear, maxYear);
  switch (format) {
    case "slash":
      return d.toLocaleDateString();
    case "full":
      return d.toDateString();
    case "dash":
      return d.toISOString().slice(0, 10);
    default:
      throw new Error(
        "wrong date format. Select between: 'slash', 'dash', 'full'"
      );
  }
};
