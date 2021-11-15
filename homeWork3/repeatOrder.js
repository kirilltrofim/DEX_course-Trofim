export const repeatOrder = (cartData, date) => {
    //TODO: нужно повторить заказ за выбранную дату
    // дублиовать соответствующие элементы
    // поставить в начало спиcка
    // дату текущую
    // поменять id на уникальный
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
      }
    let randomId = getRandomInt(1,1001);
    cartData.filter(e=>e.date === date).forEach(item => {
      let copy = {...item};
      copy.date = new Date().toISOString();
      copy.id = randomId++;
      cartData.unshift(copy);
    });
    return cartData;
  };