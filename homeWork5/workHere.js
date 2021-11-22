import { compareText } from "./data";

// Написать 2 функции,
// первая обработает ответ от compareText (положительный и отрицательный)
// TODO: первая функция использует then и catch
const getData = (str) => {
  return compareText(str)
    .then((res) => res)
    .catch((err) => err.message);
};
// TODO: вторая использует try и catch
// TODO: Если ответ положительный вывести в консоль: "Success: ..."
// TODO: Если ответ отрицательный вывести в консоль: "Error: ..." (тескт ошибки)
const processingData = async (str) => {
  try {
    const result = await getData(str);
    console.log(`Success ${result}`);
  } catch (err) {
    console.log(`Error: ${err}`);
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
    .catch((error) => {
      throw new Error(error.message + " :(");
    })
    .then((result) => {
      while (result.length <= 20) {
        result = result + ")";
      }
      console.log(result);
    })
    .catch((error) => {
      while (error.message.length <= 20) {
        error.message = error.message + "(";
      }
      console.error(error.message);
    });
};

getResponse("короткий текст");
getResponse("Длинный текстттт");
