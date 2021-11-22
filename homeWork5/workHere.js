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