export const formatAmountUSD = (amount) => {
  if (amount === null) return null
  return new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'USD',
    currencyDisplay: 'symbol',
    maximumFractionDigits: 2,
  }).format(amount)
}
export const formatAmountUAH = (amount) => {
  if(amount == null) return null;

  return new Intl.NumberFormat('ru-RU', {
    style: "currency",
    currency: 'UAH',
    currencyDisplay: 'code',
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(amount)
};
