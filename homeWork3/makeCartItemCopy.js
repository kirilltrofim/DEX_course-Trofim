export const makeCartItemCopy = (cartItem) => {
  //TODO: сделать копию элемента "Пицца с анчоусами"
  // После увеличить кол-во добавленного ингредиента
  function deepClone(cartItem) {
    const cartItemClone = {};
    for (const i in cartItem) {
      if (cartItem[i] instanceof Object) {
        cartItemClone[i] = deepClone(cartItem[i]);
        continue;
      }
      cartItemClone[i] = cartItem[i];
    }
    return cartItemClone;
  }

  let arr = deepClone(cartItem[0]);
  console.log(arr);
  cartItem[0].addedIngredients[0].count = ++arr.addedIngredients[0].count;
  console.log(cartItem);

  return cartItem;
};
