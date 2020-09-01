export const currencyToUse = (usedCurrency) => {
  let currencyKeys = Object.keys(usedCurrency);
  let currencyName = usedCurrency[currencyKeys[1]];
  let currencyValue = usedCurrency[currencyKeys[0]];
  return { name: currencyName, value: currencyValue };
};
