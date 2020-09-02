export const currencyToUse = (usedCurrency) => {
  let currencyKeys = Object.keys(usedCurrency);
  return {
    name: usedCurrency[currencyKeys[1]],
    value: usedCurrency[currencyKeys[0]],
  };
};

export const productPrice = (price, value) => {
  return Math.round(price * value).toLocaleString();
};

export const productDiscountPrice = (price, discountPrice) => {
  return `-${Math.round(((discountPrice - price) * 100) / discountPrice)}%`;
};
