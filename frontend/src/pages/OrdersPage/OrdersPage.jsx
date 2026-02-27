
import styles from './OrdersPage.module.scss';
import {AiFillPlusCircle} from "react-icons/ai";
import OrdersCard from "./components/OrderCard/OrdersCard.jsx";
import {useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux';
import DeleteModal from "../../components/DeleteModal/DeleteModal.jsx";
import OrderProductsPanel
  from "./components/OrderProductsPanel/OrderProductsPanel.jsx";

import {
  clearCurrentOrder,
  closeDeleteModal,
  deleteOrder,
  fetchOrderById,
  fetchOrders,
  openDeleteModal
} from "../../redux/slices/ordersSlice.js";

const OrdersPage = () => {
  const dispatch = useDispatch();
  const {
    orders, currentOrder, loading, error, deleteModal
  } = useSelector(state => state.orders);
  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);
  console.log(orders)
  const handleOpenToggleProductsPanel = (orderId) => {
    if (currentOrder?.id === orderId) {
      dispatch(clearCurrentOrder());
    } else {
      dispatch(fetchOrderById(orderId));
    }
  };
  const handleOpenDeleteModal = (order) => {
    dispatch(openDeleteModal({
      id: order.id, name: order.name || order.title
    }));
  };
  const handleCloseDeleteModal = () => {
    dispatch(closeDeleteModal());
  };
  const handleConfirmDelete = () => {
    if (deleteModal.orderId) {
      dispatch(deleteOrder(deleteModal.orderId));
    }
  };
  if (loading && orders.length === 0) {
    return <div className={styles['orders__loading']}>Загрузка...</div>;
  }
  if (error) {
    return <div className={styles['orders__error']}>{error}</div>;
  }
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
          Приходы <span aria-label={`всего ${orders.length}`}>/ {orders.length}</span>
        </h1>
      </header>

      <div className={`bg-body-secondary ${styles['orders__content']} ${currentOrder ? styles['orders__content--split'] : ''}`}>
        <ul className={styles['orders__items']}>
          {!orders?.length ? (<li className={styles['orders__empty']}>
              <p>Нет приходов</p>
            </li>) : (orders.map((order) => (<li
                className={styles['orders-item']}
                key={order.id}
              >
                <OrdersCard
                  order={order}
                  variant={currentOrder ? 'compact' : 'full'}
                  isActive={currentOrder?.id === order.id}
                  onProductsClick={() => handleOpenToggleProductsPanel(order.id)}
                  onDeleteClick={() => handleOpenDeleteModal(order)}
                />
              </li>)))}
        </ul>

        {currentOrder && (<OrderProductsPanel
            order={currentOrder}
            onClose={() => dispatch(clearCurrentOrder())}
          />)}
      </div>

      {deleteModal.isOpen && (<DeleteModal
          order={{
            id: deleteModal.orderId, name: deleteModal.orderName
          }}
          onConfirm={handleConfirmDelete}
          onClose={handleCloseDeleteModal}
        />)}
    </section>);
};
export default OrdersPage;