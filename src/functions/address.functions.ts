import * as utils from "./utils.functions";
import * as addressData from "../data/address.data";

export const country = () => utils.randomArrayItem(addressData.countries);

export const city = () => utils.randomArrayItem(addressData.cities);

export const state = () => utils.randomArrayItem(addressData.states);

export const way = () => utils.randomArrayItem(addressData.ways);

export const street = () => utils.randomArrayItem(addressData.streets);

export const number = () => utils.randomNumber(10, 999);

export const postcode = () => utils.randomNumber(10000, 99999);

export const fullAddress = () =>
  `${number()} ${street()} ${way()}, ${postcode()} ${city()}, ${state()} ${country().toUpperCase()}`;
