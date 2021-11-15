export const getCartItemsByDate = (cartData, date) => {
  //TODO: выбрать покупки сделанные за выбранную дату
  //Писать дату через тире гггг-мм-дд
  const filterCartData = cartData.map(
    (item) => (item = { ...item, date: item.date.slice(0, 10) })
  );
  if(isNaN(date) == 0) return cartData;
  return (filterCartData.filter((item) => item.date === date));
};