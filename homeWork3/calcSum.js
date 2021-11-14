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
    sumCountTotal += cartData[key].count;
    if (cartData[key].count > 1)
      sumTotal += cartData[key].price * cartData[key].count;
    else sumTotal += cartData[key].price;
  }
  for (let key in cartData) {
    switch (cartData[key].type) {
      case "water":
        sumCountWater += cartData[key].count;
        if (cartData[key].count > 1)
          sumWater += cartData[key].price * cartData[key].count;
        else sumWater += cartData[key].price;
        break;
      case "pizza":
        sumCountPizza += cartData[key].count;
        if (cartData[key].count > 1)
          sumPizza += cartData[key].price * cartData[key].count;
        else sumPizza += cartData[key].price;
        break;
      case "other":
        sumCountOther += cartData[key].count;
        if (cartData[key].count > 1)
          sumOther += cartData[key].price * cartData[key].count;
        else sumOther += cartData[key].price;
        break;

      default:
        break;
    }
  }

  return {
    total: {
      count: sumCountTotal,
      sum: sumTotal
    },
    water: {
      count: sumCountWater,
      sum: sumWater
    },
    pizza: {
      count: sumCountPizza,
      sum: sumPizza
    },
    other: {
      count: sumCountOther,
      sum: sumOther
    },
  };
};