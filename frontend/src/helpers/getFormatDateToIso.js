
const parseISODate = (str) => {
  if (!str) return null;
  const [datePart] = str.split(' ');
  const [year, month, day] = datePart.split('-');
  if (!year || !month || !day) return null;
  return {
    day: day.padStart(2, '0'), month: month.padStart(2, '0'), year
  };
};
export const getShortFormatDate = (str) => {
  if (!str) return '—';
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


export const formatDateForDisplay = (dateString) => {
  if (!dateString) return '-';
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, '0');
  const month = date.toLocaleString('ru', {month: 'short'}).replace('.', '');
  const year = date.getFullYear();
  return `${day} / ${month} / ${year}`;
};

export const dateToIso = (dateStr) => {
  if (!dateStr) return '-';
  return new Date(dateStr).toISOString().split('T')[0];
};

