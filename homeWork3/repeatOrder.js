// export const repeatOrder = (cartData, date) => {
//     //TODO: нужно повторить заказ за выбранную дату
//     // дублиовать соответствующие элементы
//     // поставить в начало спиcка
//     // дату текущую
//     // поменять id на уникальный
//     const now = new Date().toISOString();
//     const filterCartData = cartData.filter(item => item.date === date).map((item,i) => item = {...item, id:String(cartData.length + i), date:now});

//     cartData = [...filterCartData, ...cartData];
//     console.log(cartData);
//     return cartData;
//   };
//Работает только для первоначального cartData