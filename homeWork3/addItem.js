// export const addItem = (cartData, item) => {
//   //TODO: увеличить кол-во товара в полученном элементе
//   function deepClone(cartItem) {
//     const cartItemClone = {};
//     for (const i in cartItem) {
//       if (cartItem[i] instanceof Object) {
//         cartItemClone[i] = deepClone(cartItem[i]);
//         continue;
//       }
//       cartItemClone[i] = cartItem[i];
//     }
//     return cartItemClone;
//   }
//   console.log(item);

//   return cartData;
// };

export const addItem = (cartData, item) => {
  //TODO: увеличить кол-во товара в полученном элементе
  for (let key in cartData) {
    if (item.name == cartData[key].name) cartData[key].count++;
  }
  return cartData;
};
