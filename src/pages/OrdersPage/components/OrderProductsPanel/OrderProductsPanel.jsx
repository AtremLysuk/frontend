import styles from './OrderProductsPanel.module.scss';
import {FaTrashAlt} from "react-icons/fa";
import {AiFillPlusCircle} from "react-icons/ai";

const OrderProductsPanel = ({order, onClose}) => {
  const mockProducts = [{
    id: 1,
    name: 'Gigabyte Technology X58-USB3 (Socket 1366) 6 X58-USB3',
    sn: 'SN-12.3456789',
    status: 'free',
    imageUrl: '/images/monitor.png',
  }, {
    id: 2,
    name: 'Gigabyte Technology X58-USB3 (Socket 1366) 6 X58-USB3',
    sn: 'SN-12.3456789',
    status: 'free',
    imageUrl: './images/monitor.png',
  }, {
    id: 3,
    name: 'Gigabyte Technology X58-USB3 (Socket 1366) 6 X58-USB3',
    sn: 'SN-12.3456789',
    status: 'repair',
    imageUrl: './images/monitor.png',
  }, {
    id: 4,
    name: 'Gigabyte Technology X58-USB3 (Socket 1366) 6 X58-USB3',
    sn: 'SN-12.3456789',
    status: 'free',
    imageUrl: './images/monitor.png',
  }, {
    id: 5,
    name: 'Gigabyte Technology X58-USB3 (Socket 1366) 6 X58-USB3',
    sn: 'SN-12.3456789',
    status: 'free',
    imageUrl: './images/monitor.png',
  }, {
    id: 6,
    name: 'Gigabyte Technology X58-USB3 (Socket 1366) 6 X58-USB3',
    sn: 'SN-12.3456789',
    status: 'free',
    imageUrl: './images/monitor.png',
  },]



  return (<article
    className={`${styles['panel']} bg-white`}
    aria-labelledby='order-products-title'
  >
    <button
      className={styles['panel__close']}
      type='button'
      aria-label='Закрыть панель продуктов'
      onClick={() => onClose()}
    >x
    </button>
    <header className={styles['panel__header']}>
      <h2
        className={styles['panel__title']}
        id='order-products-title'
      >{order.name}
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
      {mockProducts?.length && mockProducts.map((product) => (<li
        key={product.id}
        className={styles['panel__item']}
      >
        <span className={`${styles['panel__item-dot']} ${styles[`panel__item-dot--${product.status}`]}`} />

        <div className={styles['panel__item-img']}>
          <img
            src={product.imageUrl}
            alt={product.name}
          />
        </div>

        <div className={styles['panel__item-info']}>
          <span className={styles['panel__item-name']}>{product.name}</span>
          <span className={styles['panel__item-sn']}>{product.sn}</span>
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
      </li>))}
    </ul>

  </article>)
};
export default OrderProductsPanel