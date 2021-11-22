// экспорт массива
export let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

// экспорт константы
export const MODULES_BECAME_STANDARD_YEAR = 2015;

// экспорт класса
export class User {
  constructor(name) {
    this.name = name;
  }
}

import { sayHi, sayBye } from "./say.js";

sayHi("John"); // Hello, John!
sayBye("John"); // Bye, John!

import { sayHi as hi, sayBye as bye } from "./say.js";

hi("John"); // Hello, John!
bye("John"); // Bye, John!

import * as user from "./user.js";

let User = user.default; // экспорт по умолчанию
new User("John");