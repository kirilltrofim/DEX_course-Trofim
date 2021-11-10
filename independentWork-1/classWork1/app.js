export const getHolidaysNotifications = (birthData, salary) => {
  const today = new Date();
  let prize;

  if ((birthData.getDay && birthData.getMonth) === (today.getDay && today.getMonth)) {
    prize = (salary / 100) * 10;
    let ready = prize + (+today.getMonth * +today.getDate);
    return alert( `У Василия Иванова сегодня праздник, его премия составляет ${Math.ceil(ready)}`);
  } else alert(`Сегодня ${today}`);
};