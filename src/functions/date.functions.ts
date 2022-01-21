import * as dateData from "../data/date.data";
import * as utils from "./utils.functions";

type lengthT = "long" | "short" | "num";

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

export const day = (length: lengthT = "long"): string =>
  utils.randomArrayItem(dateData.days[length]);

export const month = (length: lengthT = "long"): string =>
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

export const custom = (
  format: "YMd" | "dMY" | "MdY" | "ddMY" = "dMY",
  separator: string = " ",
  opt?: {
    minYear?: number;
    maxYear?: number;
    day?: lengthT;
    month?: lengthT;
  }
) => {
  const customYear = year(opt?.minYear, opt?.maxYear);
  const customMonth = month(opt?.month);
  const customDay = day(opt?.day ? opt.day : "num");

  switch (format) {
    case "YMd":
      return customYear + separator + customMonth + separator + customDay;
    case "ddMY":
      return (
        day("long") +
        separator +
        day("num") +
        separator +
        customMonth +
        separator +
        customYear
      );
    case "dMY":
      return customDay + separator + customMonth + separator + customYear;
    case "MdY":
      return customMonth + separator + customDay + separator + customYear;
    default:
      throw new Error("Wrong custom date format. Options are: YMd | dMY | MdY");
  }
};
