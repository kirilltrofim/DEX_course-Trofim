export const showPrice = (price, discount) => {
    const discountedPrice = price - (price * discount) / 100;
    //TODO: Привести цену к виду: 10.00 р.
    // округлять до копеек в сторону магазина
    return Math.ceil(discountedPrice * Math.pow(10, 2)) / Math.pow(10, 2) + " р.";
  };