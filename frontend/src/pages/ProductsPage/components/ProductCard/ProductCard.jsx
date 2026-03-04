import {useDispatch} from 'react-redux';
import {FaTrashAlt} from 'react-icons/fa';
import {deleteProduct} from '../../../../redux/slices/productsSlice';
import {
  getShortFormatDate,
  getFullFormatDate,dateToIso,
} from "../../../../helpers/getFormatDateToIso.js";
import styles from './ProductCard.module.scss';


const ProductCard = ({product}) => {
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

  console.log(date)


  return (<div className={styles.card}>

      <div className={styles.card__status}>
        <span className={`${styles['card__status-dot']} ${styles[`card__status-dot--${statusClass}`]}`} />
      </div>

      <div className={styles.card__image}>
        <img
          src={imageUrl}
          alt={title}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = '/images/monitor.png';
          }}
        />
      </div>

      <div className={styles.card__info}>
        <div
          className={styles.card__title}
          title={title}
        >{title}</div>
        <div className={styles.card__sn}>SN-{serialNumber}</div>
      </div>

      <div className={`${styles.card__statusText} ${styles[statusClass]}`}>
        {statusText}
      </div>

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

      <div className={styles.card__prices}>
        <div className={styles.card__priceUsd}>{prices?.usd?.formatted ?? '—'}</div>
        <div className={styles.card__priceUah}>
          {prices?.uah?.formatted ?? '—'}
          {prices?.uah?.isDefault &&
            <span className={styles.card__priceDefault}>*</span>}
        </div>
      </div>


      <div
        className={styles.card__orderTitle}
        title={orderTitle ?? ''}
      >
        {orderTitle ?? '—'}
      </div>

      <div>-</div>

      <div
        className={styles.card__orderTitle}
        title={orderTitle ?? ''}
      >
        {orderTitle ?? '—'}
      </div>

      <div className={styles.card__orderDates}>
        <time dateTime={dateToIso(date)}>{getShortFormatDate(date)}</time>
        <time dateTime={dateToIso(orderDateRaw)}>{getFullFormatDate(orderDateRaw)}</time>
      </div>

      <button
        className={styles.card__delete}
        aria-label="Удалить продукт"
        onClick={handleDelete}
      >
        <FaTrashAlt size={14} />
      </button>

    </div>);
};
export default ProductCard;