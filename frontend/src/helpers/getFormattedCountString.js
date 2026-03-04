const pluralRules = new Intl.PluralRules('ru-RU');


export const getFormattedCountString = (count, forms) => {
  const rule = pluralRules.select(count);
  return forms[rule];
}