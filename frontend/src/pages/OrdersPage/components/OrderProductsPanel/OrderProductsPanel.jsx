
import styles from './OrderProductsPanel.module.scss';
import {FaTrashAlt} from "react-icons/fa";
import {AiFillPlusCircle} from "react-icons/ai";
import {useState} from 'react';

const OrderProductsPanel = ({order, onClose}) => {
  const [isClosing, setIsClosing] = useState(false);
  if (!order) return null;
  const products = order.products || [];
  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 200);
  };
  const getImageUrl = (photo) => {
    if (!photo) return '/images/placeholder.png';
    return `/images/${photo}`;
  };
  return (<article
      className={`${styles['panel']} bg-white ${isClosing ? styles['panel--closing'] : ''}`}
      aria-labelledby='order-products-title'
    >
      <button
        className={styles['panel__close']}
        type='button'
        aria-label='Закрыть панель продуктов'
        onClick={handleClose}
      >×
      </button>

      <header className={styles['panel__header']}>
        <h2
          className={styles['panel__title']}
          id='order-products-title'
        >
          {order.title || order.name}
        </h2>
        <button
          className={styles['panel__add']}
          type="button"
          aria-label="Добавить продукт"
        >
          <AiFillPlusCircle
            size={24}
            fill='#48c36b'
          />
          Добавить продукт
        </button>
      </header>

      <ul className={styles['panel__items']}>
        {products.length > 0 ? (products.map((product) => (<li
              key={product.id}
              className={styles['panel__item']}
            >
              <span
                className={`${styles['panel__item-dot']} ${styles[`panel__item-dot--${product.status}`]}`}
              />

              <div className={styles['panel__item-img']}>
                <img
                  src={getImageUrl(product.photo)}
                  alt={product.title}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/images/placeholder.png';
                  }}
                />
              </div>

              <div className={styles['panel__item-info']}>
                <span className={styles['panel__item-name']}>
                  {product.title}
                </span>
                <span className={styles['panel__item-sn']}>
                  SN: {product.serialNumber}
                </span>
              </div>

              <span className={`${styles['panel__item-status']} ${styles[`panel__item-status--${product.status}`]}`}>
                {product.status === 'free' ? 'Свободен' : 'В ремонте'}
              </span>

              <button
                className={styles['panel__item-trash']}
                type="button"
                aria-label={`Удалить продукт ${product.id}`}
              >
                <FaTrashAlt
                  size={13}
                  aria-hidden="true"
                />
              </button>
            </li>))) : (<li className={styles['panel__empty']}>
            <p>Нет продуктов в этом приходе</p>
          </li>)}
      </ul>

    </article>);
};
export default OrderProductsPanel;