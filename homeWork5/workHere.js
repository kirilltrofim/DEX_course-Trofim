import { compareText } from "./data";

// Написать 2 функции,
// первая обработает ответ от compareText (положительный и отрицательный)
// TODO: первая функция использует then и catch
const getData = (str) => {
  return compareText(str)
    .then((res) => res)
    .catch((mistake) => mistake.message);
};
// TODO: вторая использует try и catch
// TODO: Если ответ положительный вывести в консоль: "Success: ..."
// TODO: Если ответ отрицательный вывести в консоль: "Error: ..." (тескт ошибки)
const processingData = async (str) => {
  try {
    const result = await getData(str);
    console.log(`Success ${result}`);
  } catch (mistake) {
    console.log(`Error: ${mistake}`);
  }
};
processingData("короткий текст");
processingData("длинный тексттттттттттт");

// Используя конструкции then catch
// к положительному ответу добавьте " :)"
// к ответу с ошибкой добавьте " :("
// Если длина ответа меньше 20 символов, то нужно добавить "(" или ")" в зависимости от ответа,
// скобочки нужно добавлять пока длинна не станет равна 20
// TODO: на каждое действи должна быть отдельная конструкция then или catch
// Например первый then для добавления " :)", второй для подсчёта количества символов и добавления недостающих
const getResponse = async (str) => {
  compareText(str)
    .then((result) => result + " :)")
    .catch((mistake) => {
      throw new Error(mistake.message + " :(");
    })
    .then((result) => {
      while (result.length <= 20) {
        result = result + ")";
      }
      console.log(result);
    })
    .catch((mistake) => {
      while (mistake.message.length <= 20) {
        mistake.message = mistake.message + "(";
      }
      console.error(mistake.message);
    });
};

getResponse("короткий текст");
getResponse("Длинный текстттт");

// Написать функцию, которая принимает url и выводит в консоль ответ
// TODO: обработать ошибки и вывести в консоль "Ошибка"
// TODO: ошибка если тстатус меньше 200 и больше 299
const getDataFromAPI = async (url) => {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log("Данные получены:");
      console.log(data);
      return data;
    } else {
      throw new Error("Ошибка. Cтатус HTTP меньше 200 или больше 299");
    }
  } catch (error) {
    console.error(error);
  }
};

getDataFromAPI("https://randomuser.me/api");
getDataFromAPI("https://randomuser123.me/api");
getDataFromAPI("https://randomuser.me/api123");
