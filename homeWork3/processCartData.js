export const processCartData = (cartData) => {
  //TODO: Нужно добавить поле discount(oldPrice - price)
  // убрать поле oldPrice
  let deleteItem = (cartData) => {
    for (let key in cartData) {
      delete cartData[key].oldPrice;
    }
  };

  let addItem = (cartData) => {
    for (let key in cartData) {
      cartData[key].discount = null;
    }
  };
  deleteItem(cartData);
  addItem(cartData);
  console.log(cartData);
  return cartData;
};