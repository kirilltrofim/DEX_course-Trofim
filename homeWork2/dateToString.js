export const dateToString = (date) => {

  const formatDate = (date) => {
    let a = new Date(date).toISOString().split("T");
    return a[0];
  };

  const editData = (num) => {
    return new Date(Date.now() + num).toISOString().split("T")[0];
  };

  let yesterday = editData(-86400000);
  let today = editData(0);
  let tomorrow = editData(86400000);
  let checkedDate = formatDate(date);

  switch (checkedDate) {
    case yesterday:
      return "Вчера";
      break;
    case tomorrow:
      return "Завтра";
      break;
    case today:
      return "Сегодня";
      break;
  }
  return checkedDate;
};
