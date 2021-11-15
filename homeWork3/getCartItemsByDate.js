export const getCartItemsByDate = (cartData, dates) => {
  //TODO: выбрать покупки сделанные за выбранную дату
  // Доделать , не работает
  dates = new Date(dates);
  console.log(dates);
  for (let key in cartData) {
    let date = new Date(cartData[key].date);

    if (dates.getDate() === date.getDate) return cartData[key];
  }

  return cartData;
};

export const getCartItemsByDate = (cartData, dates) => {
  //TODO: выбрать покупки сделанные за выбранную дату
  // Доделать , не работает
  dates = new Date(dates);
  console.log(dates);
  for (let key in cartData) {
    let date = new Date(cartData[key].date);
      Date.prototype.sameDay = function(d) {
      return this.getFullYear() === d.getFullYear()
      && this.getDate() === d.getDate()
      && this.getMonth() === d.getMonth();
    }

    if(date.sameDay(dates)) return cartData[key];
  }

  return cartData;
};

export const getCartItemsByDate = (cartData, dates) => {
  //TODO: выбрать покупки сделанные за выбранную дату
  // Доделать , не работает
  dates = new Date(dates);
  console.log(dates);
  for (let key in cartData) {
    let date = new Date(cartData[key].date);
    if (dates.toDateString() !== date.toDateString())
    delete cartData[key];
  }

  return cartData;
};

export const getCartItemsByDate = (cartData, dates) => {
  //TODO: выбрать покупки сделанные за выбранную дату
  // Доделать , не работает
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

  let cartDataClone = deepClone(cartData);

  dates = new Date(dates);
  console.log(dates);
  cartData = cartDataClone;
  for (let key in cartData) {
    let date = new Date(cartData[key].date);
    if (dates.toLocaleDateString() !== date.toLocaleDateString()){
    console.log(cartData);
    delete cartData[key];
  }

  }
  return cartData;
};