export const getDoubleUserBonuses = (data) => {
    let arr = {},
        sum = 0;
    for (let key in data){
      console.log(data[key].userBonuses);
      arr = data[key].userBonuses;
      for(let i in arr){
        sum += arr[i];
      }
      console.log(sum);
      return `Пользователь ${data[key].name} получат соответсвенно ${sum} бонусов`;
    }

  };

  export const getDoubleUserBonuses = (data) => {
    let arr = data.map(item => {
      let sum = 0;
      for (let value of Object.values(item.userBonuses)){
        sum+=value;
      }
      return sum*2;
    });
    return `Пользователи ${data.map(element=> element.name)} получат соответственно ${arr}`

  };