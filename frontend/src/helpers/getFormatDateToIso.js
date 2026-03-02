const MONTHS_TO_NUM = {
  'Янв': '01', 'Фев': '02', 'Мар': '03', 'Апр': '04',
  'Май': '05', 'Июн': '06', 'Июл': '07', 'Авг': '08',
  'Сен': '09', 'Окт': '10', 'Ноя': '11', 'Дек': '12'
};

const MONTHS_TO_NAME = {
  '01': 'Янв', '02': 'Фев', '03': 'Мар', '04': 'Апр',
  '05': 'Май', '06': 'Июн', '07': 'Июл', '08': 'Авг',
  '09': 'Сен', '10': 'Окт', '11': 'Ноя', '12': 'Дек'
};

const parseISODate = (str) => {
  if (!str) return null;

  const [datePart] = str.split(' ');
  const [year, month, day] = datePart.split('-');

  if (!year || !month || !day) return null;

  return {
    day: day.padStart(2, '0'),
    month: month.padStart(2, '0'),
    year
  };
};

export const getShortFormatDate = (str) => {
  if (!str) return '—';

  if (str.includes(' / ')) {
    const [day, month] = str.split(' / ');
    if (day && month) {
      const monthNum = MONTHS_TO_NUM[month] || month;
      return `${day} / ${monthNum}`;
    }
  }


  const date = parseISODate(str);
  if (!date) return '—';

  return `${date.day} / ${date.month}`;
};


export const getFullFormatDate = (str) => {
  if (!str) return '—';


  if (str.includes(' / ')) {
    const parts = str.split(' / ');
    if (parts.length === 3) {
      return str;
    }
    if (parts.length === 2) {
      const [day, month] = parts;
      return `${day} / ${month} / ????`;
    }
  }


  const date = parseISODate(str);
  if (!date) return '—';

  return `${date.day} / ${date.month} / ${date.year}`;
};

export const getISODate = (str) => {
  const date = parseISODate(str);
  if (!date) return '';
  return `${date.year}-${MONTHS_TO_NUM[date.month]}-${date.day}`;
};