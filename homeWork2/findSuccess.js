export const findSuccess = (bankResponse) => {
    //TODO: Проверьте что в строке есть 'Success' без учёта регистра
    let regexp = /Success/gi;
    let reg = new RegExp("Success", "i");
    return bankResponse === bankResponse.match("Success") ? "Yes" : "No";
  };