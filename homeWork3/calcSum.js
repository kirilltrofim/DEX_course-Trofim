export const calcSum = (cartData) => {
  //TODO: посчитать суммы по типам товаров и их цены
  let sumTotal = 0,
    sumCountTotal = 0,
    sumWater = 0,
    sumCountWater = 0,
    sumPizza = 0,
    sumCountPizza = 0,
    sumOther = 0,
    sumCountOther = 0;
  for (let key in cartData) {
    sumTotal += cartData[key].price;
    sumCountTotal += cartData[key].count;
  }
  for (let key in cartData) {
    switch (cartData[key].type) {
      case "water":
        sumWater += cartData[key].price;
        sumCountWater += cartData[key].count;
        break;
      case "pizza":
        sumPizza += cartData[key].price;
        sumCountPizza += cartData[key].count;
        break;
      case "other":
        sumOther += cartData[key].price;
        sumCountOther += cartData[key].count;
        break;

      default:
        break;
    }
  }

  return {
    total: { count: sumCountTotal, sum: sumTotal },
    water: { count: sumCountWater, sum: sumWater },
    pizza: { count: sumCountPizza, sum: sumPizza },
    other: { count: sumCountOther, sum: sumPizza },
  };
};