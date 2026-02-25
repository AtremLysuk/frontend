import styles from './OrdersPage.module.scss';
import {AiFillPlusCircle} from "react-icons/ai";
import OrdersCard from "./components/OrderCard/OrdersCard.jsx";
import {useState} from "react";
import DeleteModal from "../../components/DeleteModal/DeleteModal.jsx";
import OrderProductsPanel
  from "./components/OrderProductsPanel/OrderProductsPanel.jsx";

const OrdersPage = () => {
  const [activeId, setActiveId] = useState(null)
  const [orderToDelete, setOrderToDelete] = useState(null)
  const mockOrders = [{
    id: 1,
    type: 'ПРИХОД',
    name: 'Длинное предлинное длинное название прихода',
    productsCount: 23,
    startDate: '06 / Апр / 2017',
    endDate: '06 / Мая / 2017',
    amountUSD: 2500,
    amountUAH: 250000.50,
    status: 'free'
  }, {
    id: 2,
    type: 'ГРУППЫ',
    name: 'Длинное название прихода',
    productsCount: 23,
    startDate: '06 / Сен / 2017',
    endDate: '06 / Окт / 2017',
    amountUSD: null,
    amountUAH: 50,
    status: 'repair'
  }, {
    id: 3,
    type: 'ПРОДУКТЫ',
    name: 'Еще один приход',
    productsCount: 15,
    startDate: '15 / Мар / 2017',
    endDate: '15 / Апр / 2017',
    amountUSD: 1500,
    amountUAH: 39000,
    status: 'free'
  }, {
    id: 4,
    type: 'ПОЛЬЗОВАТЕЛИ',
    name: 'Приход пользователей',
    productsCount: 5,
    startDate: '01 / Фев / 2017',
    endDate: '01 / Мар / 2017',
    amountUSD: 500,
    amountUAH: 13000,
    status: 'repair'
  }];
  const handleOpenDeleteModal = (order) => {
    setOrderToDelete((order))
  }
  const handleCloseDeleteModal = (order) => {
    setOrderToDelete(null)
  }
  const handleConfirmeDelete = () => {
    if (orderToDelete) {
      console.log('Удаляем приход:', orderToDelete.id)
      if (activeId === orderToDelete.id) {
        setActiveId(null)
      }
      handleCloseDeleteModal()
    }
  }
  const handleOpenToggleProductsPanel = (id) => {
    setActiveId(prev => prev === id ? null : id)
  }
  const notFakeOrders = async () => {
    try {
      const res = await fetch('http://localhost:3001/api/orders');
      if (!res.ok) {
        throw new Error("fail fetch")
      }
      const data = await res.json()
      return data
    } catch (error) {
      console.log("error")
    }
  }
  const activeOrder = mockOrders.find(order => order.id === activeId)
  // useEffect(() => {
  //
  // }, []);
  return (<section
    className={styles['orders']}
    aria-labelledby='orders-title'
  >
    <header className={`${styles['orders__header']} bg-body-secondary`}>
      <button
        className={styles['orders__add-button']}
        aria-label="Добавить приход"
      >
        <AiFillPlusCircle
          size={40}
          fill='#48c36b'
          className={styles['orders__add-icon']}
        />
      </button>
      <h1 id="orders-title">
        Приходы <span aria-label={`всего ${mockOrders.length}`}>/ {mockOrders.length}</span>
      </h1>
    </header>

    <div className={`bg-body-secondary ${styles['orders__content']} ${activeId ? styles['orders__content--split'] : ''}`}>

      <ul className={styles['orders__items']}>

        {!mockOrders?.length ? (<li className={styles['orders__empty']}>
          <p>Нет приходов</p>
        </li>) : (mockOrders.map((order) => (<li
          className={styles['orders-item']}
          key={order.id}
        >
          <OrdersCard
            order={order}
            variant={activeId ? 'compact' : 'full'}
            isActive={activeId === order.id}
            onProductsClick={() => handleOpenToggleProductsPanel(order.id)}
            onDeleteClick={() => handleOpenDeleteModal(order)}
          />
        </li>)))}
      </ul>

      {activeId && (<OrderProductsPanel
        order={activeOrder}
        onClose={() => setActiveId(null)}
      />)}
    </div>

    {orderToDelete && (<DeleteModal
      order={orderToDelete}
      onConfirm={handleConfirmeDelete}
      onClose={handleCloseDeleteModal}
    />)}
  </section>)
}
export default OrdersPage

