// backend/data/db.js

const products = [
  {
    id: 1,
    serialNumber: 1234,
    isNew: 1,
    photo: 'pathToFile.jpg',
    title: 'Gigabyte Technology X58-USB3 (Socket 1366) 6 X58-USB3',
    type: 'Monitors',
    specification: 'Specification 1',
    guarantee: {
      start: '2017-06-29 12:09:33',
      end: '2019-06-29 12:09:33'
    },
    price: [
      { value: 100, symbol: 'USD', isDefault: 0 },
      { value: 2600, symbol: 'UAH', isDefault: 1 }
    ],
    orderId: 1,
    status: 'free',
    date: '2017-06-29 12:09:33'
  },
  {
    id: 2,
    serialNumber: 5678,
    isNew: 1,
    photo: 'pathToFile.jpg',
    title: 'Gigabyte Technology X58-USB3 (Socket 1366) 6 X58-USB3',
    type: 'Monitors',
    specification: 'Specification 1',
    guarantee: {
      start: '2017-06-29 12:09:33',
      end: '2019-06-29 12:09:33'
    },
    price: [
      { value: 100, symbol: 'USD', isDefault: 0 },
      { value: 2600, symbol: 'UAH', isDefault: 1 }
    ],
    orderId: 1,
    status: 'repair',
    date: '2017-06-29 12:09:33'
  }
];

const orders = [
  {
    id: 1,
    title: 'Order 1',
    date: '2017-06-29 12:09:33',
    description: 'desc',
    productsCount: 2
  },
  {
    id: 2,
    title: 'Order 2',
    date: '2017-06-29 12:09:33',
    description: 'desc',
    productsCount: 0
  },
  {
    id: 3,
    title: 'Order 3',
    date: '2017-06-29 12:09:33',
    description: 'desc',
    productsCount: 0
  }
];

// Функции для работы с данными
const db = {
  orders: {
    getAll: () => orders,
    getById: (id) => orders.find(o => o.id === Number(id)),
    delete: (id) => {
      const index = orders.findIndex(o => o.id === Number(id));
      if (index !== -1) {
        orders.splice(index, 1);
        return true;
      }
      return false;
    }
  },
  products: {
    getAll: () => products,
    getById: (id) => products.find(p => p.id === Number(id)),
    getByOrderId: (orderId) => products.filter(p => p.orderId === Number(orderId)),
    getTypes: () => [...new Set(products.map(p => p.type))],
    filterByType: (type) => {
      if (!type) return products;
      return products.filter(p => p.type === type);
    }
  }
};

module.exports = db;