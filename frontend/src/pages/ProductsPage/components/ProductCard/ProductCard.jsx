import { useDispatch } from 'react-redux';
import { FaTrashAlt } from 'react-icons/fa';
import { deleteProduct } from '../../../../redux/slices/productsSlice';
import styles from './ProductCard.module.scss';

const dateToIso = (dateStr) => {
  if (!dateStr) return '-';
  return new Date(dateStr).toISOString().split('T')[0];
};

const dateToShort = (dateStr) => {
  if (!dateStr) return '—';
  const d = new Date(dateStr);
  return d.toLocaleDateString('ru-RU', { year: 'numeric', month: '2-digit', day: '2-digit' })
    .split('.').reverse().join(' / ');
};

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const {
    id,
    title,
    serialNumber,
    guarantee,
    guaranteeDates,
    prices,
    orderTitle,
    orderDateRaw,
    date,
    status,
    photo,
    isNew,
    type,
  } = product;

  const statusText = status === 'free' ? 'свободен' : 'В ремонте';
  const statusClass = status === 'free' ? 'free' : 'repair';
  const imageUrl = photo ? `/images/${photo}` : '/images/placeholder.png';

  const handleDelete = () => dispatch(deleteProduct(id));

  return (
    <div className={styles.card}>

      {/* 1. Цветная точка */}
      <div className={styles.card__status}>
        <span className={`${styles['card__status-dot']} ${styles[`card__status-dot--${statusClass}`]}`} />
      </div>

      {/* 2. Изображение */}
      <div className={styles.card__image}>
        <img
          src={imageUrl}
          alt={title}
          onError={(e) => { e.target.onerror = null; e.target.src = '/images/monitor.png'; }}
        />
      </div>

      {/* 3. Название + SN */}
      <div className={styles.card__info}>
        <div className={styles.card__title} title={title}>{title}</div>
        <div className={styles.card__sn}>SN-{serialNumber}</div>
      </div>

      {/* 4. Статус */}
      <div className={`${styles.card__statusText} ${styles[statusClass]}`}>
        {statusText}
      </div>

      {/* 5. Даты гарантии */}
      <div className={styles.card__dates}>
        <time dateTime={dateToIso(guarantee?.start)}>
          <span className={styles.card__datesLabel}>с </span>
          {guaranteeDates?.start?.short ?? '—'}
        </time>
        <time dateTime={dateToIso(guarantee?.end)}>
          <span className={styles.card__datesLabel}>по </span>
          {guaranteeDates?.end?.short ?? '—'}
        </time>
      </div>

      <div className={styles.card__condition}>
        {isNew ? 'новый' : 'б/у'}
      </div>

      {/* 6. Цены */}
      <div className={styles.card__prices}>
        <div className={styles.card__priceUsd}>{prices?.usd?.formatted ?? '—'}</div>
        <div className={styles.card__priceUah}>
          {prices?.uah?.formatted ?? '—'}
          {prices?.uah?.isDefault && <span className={styles.card__priceDefault}>*</span>}
        </div>
      </div>


      {/* 9. Название прихода */}
      <div className={styles.card__orderTitle} title={orderTitle ?? ''}>
        {orderTitle ?? '—'}
      </div>

      <div>-</div>

      <div className={styles.card__orderTitle} title={orderTitle ?? ''}>
        {orderTitle ?? '—'}
      </div>

      {/* 10. Даты прихода: строка 1 = дата продукта, строка 2 = дата заказа */}
      <div className={styles.card__orderDates}>
        <time dateTime={dateToIso(date)}>{dateToShort(date)}</time>
        <time dateTime={dateToIso(orderDateRaw)}>{dateToShort(orderDateRaw)}</time>
      </div>

      {/* 11. Удаление */}
      <button className={styles.card__delete} aria-label="Удалить продукт" onClick={handleDelete}>
        <FaTrashAlt size={14} />
      </button>

    </div>
  );
};

export default ProductCard;