import styles from './OrderCard.module.scss'
import {FaTrashAlt} from "react-icons/fa";
import {IoList} from "react-icons/io5";
import {MdChevronRight} from "react-icons/md";
import {
  formatDateForDisplay, getFullFormatDate, getShortFormatDate
} from "../../../../helpers/getFormatDateToIso.js";
import {
  formatAmountUAH, formatAmountUSD
} from "../../../../helpers/getConvertAmount.js";
import {
  getFormattedCountString
} from "../../../../helpers/getFormattedCountString.js";

const PRODUCT_FORMS = {
  one: 'продукт', few: 'продукта', many: 'продуктов', other: 'продуктов'
};
const OrdersCard = ({
                      order,
                      variant = 'full',
                      onProductsClick,
                      isActive,
                      onDeleteClick
                    }) => {
  const isCompact = variant === 'compact'
  const formattedFullDate = formatDateForDisplay(order.date)
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
          <span>{getFormattedCountString(order.productsCount || 0, PRODUCT_FORMS)}</span>
        </div>

        <div className={styles['card__info-dates']}>
          <time
            className={styles['card__info-dates-start']}
            dateTime={order.date}
          >
            {getShortFormatDate(order.date)}
          </time>
          <time
            className={styles['card__info-dates-end']}
            dateTime={order.date}
          >
            {getFullFormatDate(formattedFullDate)}
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