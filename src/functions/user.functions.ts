import * as userData from "../data/user.data";
import * as utils from "../functions/utils.functions";

export const firstName = () => utils.randomArrayItem(userData.firstNames);

export const lastName = () => utils.randomArrayItem(userData.lastNames);

export const fullName = () => firstName() + " " + lastName();

export const email = (str?: string) => {
  if (str) {
    return utils.makeEmail(str.toLowerCase());
  } else {
    return utils.makeEmail((firstName() + "." + lastName()).toLowerCase());
  }
};

export const phone = () => {
  const digits = Math.floor(Math.random() * 9000000000) + 1000000000;
  return digits
    .toString()
    .match(/.{1,2}/g)
    ?.join(" ");
};

export const avatar = (str?: string) =>
  `https://i.pravatar.cc/300?u=${str ? str : utils.randomNumber(1, 9000000)}`;
