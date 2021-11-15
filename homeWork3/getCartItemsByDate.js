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