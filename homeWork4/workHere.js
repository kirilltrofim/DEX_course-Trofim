//TODO: Напишите функцию счётчик вызовов, должна принимать название и функцию, а возвращать функцию
// Выводит в консоль, в момент вызова функции из параметров, кол-во вызовов
export const counter = (name, func) => {
  let num = 0;
  return function () {
    num++;
    console.log(num);
    return func;
  };
};

//TODO: Напишите функцию логгер, должна принимать название и функцию, а возвращать функцию
// Выводит в консоль, в момент вызова функции из параметров, её параметры результат и название
export const logger = (name, fn) => {
  return function (...args) {
    this.fn = fn;
    console.log(` Name:${name}\n Parametrs: ${args}\n Result:${this.fn(args)}`);
    return this.fn;
  };
};

//TODO: Напишите функцию каррирования, должна принимать функцию, а возвращать функцию
// Каррирование – это трансформация функций таким образом, чтобы они принимали аргументы не как f(a, b, c), а как f(a)(b)(c)
// Должна работать для любого кол-ва аргументов
export const curry = (f) => {
  return function func(...args) {
    if (args.length >= f.length) {
      return f.apply(this, args);
    } else {
      return function (...args2) {
        return func.apply(this, args.concat(args2));
      };
    }
  };
};