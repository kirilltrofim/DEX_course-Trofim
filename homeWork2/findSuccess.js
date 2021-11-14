// export const findSuccess = (bankResponse) => {
//     //TODO: Проверьте что в строке есть 'Success' без учёта регистра
//     let regexp = /Success/gi;
//     let reg = new RegExp("Success", "i");
//     return bankResponse === bankResponse.match("Success") ? "Yes" : "No";
//   };

  const findSuccess = (bankResponse) => {

    if(bankResponse.split(' ').map(item => item.toLowerCase()).find(item => item === "success") !== undefined)
        return "Yes";
      else
        if(bankResponse.split(/(?=[A-Z])/).map(item => item.toLowerCase()).find(item => item === "success"))
            return "Yes";
          else
              return "No";
  };