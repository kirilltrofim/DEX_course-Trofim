// export const sum = (f, s) => {
//   //TODO: Должны складываться только строки и числа
//   // Постарайтесь сложить как можно больше пар и обойти NaN случаи
//   let sum;
//   if (typeof f == "number" && typeof s == "number") return f + s;
//   else if (typeof f == "number" && typeof s == "string") {
//     s = parseFloat(s);
//     return f + s;
//   } else if (typeof f == "number" && typeof s == "object") return f;
//   else if (typeof f == "boolean" && typeof s == "string") return +f;
//   // мало времени не успеваю написать не привязываясь к данным
//   else if (typeof f == "string" && typeof s == "number")
//     if (isNaN(parseInt(f))) return s;
//     else return parseInt(f) + s;

//   return sum;
// };

export const sum = (f, s) => {
  //TODO: Должны складываться только строки и числа
  // Постарайтесь сложить как можно больше пар и обойти NaN случаи
  if (isNaN(parseInt(f))) {
    if (isNaN(parseInt(s))) return 0;
    else return s;
  } else if (isNaN(parseInt(s))) return f;
  else return parseInt(f) + parseInt(s);
};
