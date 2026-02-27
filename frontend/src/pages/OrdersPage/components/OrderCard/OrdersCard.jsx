
import styles from './OrderCard.module.scss'
import {FaTrashAlt} from "react-icons/fa";
import {IoList} from "react-icons/io5";
import {MdChevronRight} from "react-icons/md";
import {
  getFullFormatDate, getShortFormatDate,
} from "../../../../helpers/getFormatDateToIso.js";
import {
  formatAmountUAH, formatAmountUSD
} from "../../../../helpers/getConvertAmount.js";

const OrdersCard = ({
                      order,
                      variant = 'full',
                      onProductsClick,
                      isActive,
                      onDeleteClick
                    }) => {
  const isCompact = variant === 'compact'
  // Преобразуем дату из формата бекенда (2024-01-15 10:00:00) в формат для отображения
  const formatDateForDisplay = (dateString) => {
    if (!dateString) return '06 / Апр / 2017'; // fallback
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = date.toLocaleString('ru', {month: 'short'}).replace('.', '');
    const year = date.getFullYear();
    return `${day} / ${month} / ${year}`;
  };
  const displayStartDate = formatDateForDisplay(order.date);
  const displayEndDate = formatDateForDisplay(order.date); // используем ту же дату для endDate
  return (
    <article className={`bg-white ${styles.card} ${isCompact ? styles['card--compact'] : ''} ${isActive ? styles['card--active'] : ''}`}>

      {!isCompact && (
        <h2 className={styles.card__title}>{order.title || order.name}</h2>)}

      <div className={styles.card__info}>

        <button
          className={styles['card__info-products']}
          type='button'
          onClick={onProductsClick}
          aria-label={`открыть список продуктов ${order.id} прихода`}
        >
          <IoList
            className={styles['card__info-products-icon']}
            aria-hidden={true}
          />
        </button>

        <div className={styles['card__info-count']}>
          <span>{order.productsCount || 0}</span>
          <span>Продукта</span>
        </div>

        <div className={styles['card__info-dates']}>
          <time
            className={styles['card__info-dates-start']}
            dateTime={order.date}
          >
            {getShortFormatDate(displayStartDate)}
          </time>
          <time
            className={styles['card__info-dates-end']}
            dateTime={order.date}
          >
            {getFullFormatDate(displayEndDate)}
          </time>
        </div>

        {!isCompact && (<div className={styles['card__info-amount']}>
          {order.totalUSD > 0 && (
            <span className={styles['card__info-amount-usd']}>
              {formatAmountUSD(order.totalUSD)}
            </span>)}
          {order.totalUAH > 0 && (
            <span className={styles['card__info-amount-uah']}>
              {formatAmountUAH(order.totalUAH)}
            </span>)}
        </div>)}

        {isCompact ? (isActive && (<MdChevronRight
          color='#fff'
          className={`${styles['card__chevron']}`}
          size={20}
        />)) : (<button
          type='button'
          className={styles['card__trash-btn']}
          aria-label={`Удалить приход ${order.id}`}
          onClick={onDeleteClick}
        >
          <FaTrashAlt
            className={styles['card__trash-icon']}
            size={15}
            aria-hidden="true"
          />
        </button>)}

      </div>
    </article>)
}
export default OrdersCard