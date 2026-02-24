const MONTHS_TO_NUM = {
  'Янв': '01', 'Фев': '02', 'Мар': '03', 'Апр': '04',
  'Май': '05', 'Июн': '06', 'Июл': '07', 'Авг': '08',
  'Сен': '09', 'Окт': '10', 'Ноя': '11', 'Дек': '12'
};

const MONTHS_TO_NAME = {
  'Янв': 'Янв', 'Фев': 'Фев', 'Мар': 'Мар', 'Апр': 'Апр',
  'Май': 'Май', 'Июн': 'Июн', 'Июл': 'Июл', 'Авг': 'Авг',
  'Сен': 'Сен', 'Окт': 'Окт', 'Ноя': 'Ноя', 'Дек': 'Дек'
};

const parseDate = (str) => {
  if (!str) return null;
  const [day, month, year] = str.split(' / ');
  if (!day || !month || !year) return null;
  return { day, month, year };
};

export const getShortFormatDate = (str) => {
  const date = parseDate(str);
  if (!date) return '—';
  return `${date.day} / ${MONTHS_TO_NUM[date.month]}`;
};

export const getFullFormatDate = (str) => {
  const date = parseDate(str);
  if (!date) return '—';
  return `${date.day} / ${date.month} / ${date.year}`;
};

export const getISODate = (str) => {
  const date = parseDate(str);
  if (!date) return '';
  return `${date.year}-${MONTHS_TO_NUM[date.month]}-${date.day}`;
};