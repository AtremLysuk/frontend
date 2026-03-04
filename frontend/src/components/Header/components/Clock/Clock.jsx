import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import styles from './Clock.module.scss';

const SOCKET_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

const DAYS = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
const MONTHS = ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'];

const formatDate = (date) => {
  const today = new Date();
  const isToday =
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear();
  return {
    label: isToday ? 'Today' : DAYS[date.getDay()],
    date: `${String(date.getDate()).padStart(2, '0')} ${MONTHS[date.getMonth()]}, ${date.getFullYear()}`,
    time: `${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`,
  };
};

const Clock = () => {
  const [now, setNow] = useState(new Date());
  const [sessions, setSessions] = useState(0);

  useEffect(() => {
    const socket = io(SOCKET_URL, { transports: ['websocket'] });
    socket.on('sessions-count', (count) => setSessions(count));
    return () => socket.disconnect();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const { label, date, time } = formatDate(now);

  return (
    <div className={styles.clock}>
      <div className={styles['clock__dateBlock']}>
        <span className={styles['clock__dayName']}>{label}</span>

      </div>
      <div className={styles['clock__timeBlock']}>
        <span className={styles['clock__date']}>{date}</span>
        <span className={styles['clock__sessions']} title={`Активных вкладок: ${sessions}`}>
          {sessions}
        </span>
        <time className={styles.clock__time} dateTime={now.toISOString()}>
          {time}
        </time>
      </div>
    </div>
  );
};

export default Clock;