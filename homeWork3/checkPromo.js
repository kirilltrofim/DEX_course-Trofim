export const checkPromo = (cartData) => {
  //TODO: нужно проверить корзина подходит под правила промоакции
  // проверить что суммарно в корзине больше 1000р
  // что есть пункт больше чем на 500р
  // что нет скидочных товаров
  let sumTotal = 0,
    sumItem = 0,
    mas = [],
    oneBigPosition = false,
    notDiscounted = true;
  for (let key in cartData) {
    if (cartData[key]?.count > 1)
      sumTotal += cartData[key].price * cartData[key].count;
    else sumTotal += cartData[key]?.price;

    if (cartData[key].count > 1)
      sumItem += cartData[key].price * cartData[key].count;
    else sumItem += cartData[key].price;
    mas[key] = sumItem;
    sumItem = 0;
    if (mas[key] > 500) oneBigPosition = true;

    if (cartData[key].discount === undefined) notDiscounted = false;
  }
  return {
    total: sumTotal > 1000 ? true : false,
    oneBigPosition: oneBigPosition,
    notDiscounted: notDiscounted,
  };
};