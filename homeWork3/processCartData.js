export const processCartData = (cartData) => {
  //TODO: Нужно добавить поле discount(oldPrice - price)
  // убрать поле oldPrice
  let Item = (cartData) => {
    for (let key in cartData) {
      if (!isNaN(cartData[key]?.oldPrice))
        cartData[key].discount = cartData[key].oldPrice - cartData[key].price;
      if (cartData[key].discount < 0) cartData[key].discount = 0;
      delete cartData[key].oldPrice;
    }
  };

  Item(cartData);
  console.log(cartData);
  return cartData;
};