export const randomArrayItem = (arr: any[]) =>
  arr[Math.floor(Math.random() * arr.length)];

export const randomNumber = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

export const makeEmail = (str: string) =>
  str +
  "@" +
  randomArrayItem([
    "yahoo.com",
    "gmail.com",
    "hotmail.com",
    "mybiz.pro",
    "aol.com",
    "outlook.com",
    "live.com",
  ]);
