export const dateToString = (date) => {

  const formatDate = (date) => {
    let a = new Date(date).toISOString().split("T");
    return a[0];
  };

  const transformationData = (num) => {
    return new Date(Date.now() + num).toISOString().split("T")[0];
  };

  let yesterday = transformationData(-86400000);
  let today = transformationData(0);
  let tomorrow = transformationData(86400000);
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
