const products = [{
  id: 1,
  serialNumber: 1234567,
  isNew: 1,
  photo: 'monitor.png',
  title: 'Gigabyte Technology X58-USB3 (Socket 1366) 6 X58-USB3',
  type: 'Monitors',
  specification: '27" 4K UHD, IPS, 60Hz',
  guarantee: {
    start: '2024-01-15 10:00:00', end: '2026-01-15 10:00:00'
  },
  price: [{value: 450, symbol: 'USD', isDefault: 0}, {
    value: 11700,
    symbol: 'UAH',
    isDefault: 1
  }],
  orderId: 1,
  status: 'free',
  date: '2024-01-15 10:00:00'
}, {
  id: 2,
  serialNumber: 2345678,
  isNew: 1,
  photo: 'monitor.png',
  title: 'ASUS ROG Swift PG32UQ 32" 4K',
  type: 'Monitors',
  specification: '32" 4K, 144Hz, HDR600',
  guarantee: {
    start: '2024-01-15 10:00:00', end: '2026-01-15 10:00:00'
  },
  price: [{value: 850, symbol: 'USD', isDefault: 0}, {
    value: 22100,
    symbol: 'UAH',
    isDefault: 1
  }],
  orderId: 1,
  status: 'free',
  date: '2024-01-15 10:00:00'
}, {
  id: 3,
  serialNumber: 3456789,
  isNew: 0,
  photo: 'monitor.png',
  title: 'Samsung Odyssey G7 27" Curved',
  type: 'Monitors',
  specification: '27" 2K, 240Hz, Curved',
  guarantee: {
    start: '2024-01-15 10:00:00', end: '2026-01-15 10:00:00'
  },
  price: [{value: 550, symbol: 'USD', isDefault: 0}, {
    value: 14300,
    symbol: 'UAH',
    isDefault: 1
  }],
  orderId: 1,
  status: 'repair',
  date: '2024-01-15 10:00:00'
}, {
  id: 4,
  serialNumber: 4567890,
  isNew: 1,
  photo: 'monitor.png',
  title: 'LG UltraGear 27GP950-B',
  type: 'Monitors',
  specification: '27" 4K, 144Hz, Nano IPS',
  guarantee: {
    start: '2024-01-15 10:00:00', end: '2026-01-15 10:00:00'
  },
  price: [{value: 650, symbol: 'USD', isDefault: 0}, {
    value: 16900,
    symbol: 'UAH',
    isDefault: 1
  }],
  orderId: 1,
  status: 'free',
  date: '2024-01-15 10:00:00'
}, {
  id: 5,
  serialNumber: 5678901,
  isNew: 1,
  photo: 'monitor.png',
  title: 'Acer Predator XB273K',
  type: 'Monitors',
  specification: '27" 4K, 144Hz, G-Sync',
  guarantee: {
    start: '2024-01-15 10:00:00', end: '2026-01-15 10:00:00'
  },
  price: [{value: 700, symbol: 'USD', isDefault: 0}, {
    value: 18200,
    symbol: 'UAH',
    isDefault: 1
  }],
  orderId: 1,
  status: 'free',
  date: '2024-01-15 10:00:00'
}, {
  id: 6,
  serialNumber: 6789012,
  isNew: 1,
  photo: 'monitor.png',
  title: 'Apple MacBook Pro 16" M3 Max',
  type: 'Laptops',
  specification: 'M3 Max, 48GB RAM, 1TB SSD',
  guarantee: {
    start: '2024-02-10 14:30:00', end: '2026-02-10 14:30:00'
  },
  price: [{value: 3200, symbol: 'USD', isDefault: 0}, {
    value: 83200,
    symbol: 'UAH',
    isDefault: 1
  }],
  orderId: 2,
  status: 'free',
  date: '2024-02-10 14:30:00'
}, {
  id: 7,
  serialNumber: 7890123,
  isNew: 1,
  photo: 'monitor.png',
  title: 'ASUS ROG Zephyrus G16',
  type: 'Laptops',
  specification: 'Intel i9, RTX 4080, 32GB RAM',
  guarantee: {
    start: '2024-02-10 14:30:00', end: '2026-02-10 14:30:00'
  },
  price: [{value: 2500, symbol: 'USD', isDefault: 0}, {
    value: 65000,
    symbol: 'UAH',
    isDefault: 1
  }],
  orderId: 2,
  status: 'repair',
  date: '2024-02-10 14:30:00'
}, {
  id: 8,
  serialNumber: 8901234,
  isNew: 1,
  photo: 'monitor.png',
  title: 'Lenovo Legion 7 Pro',
  type: 'Laptops',
  specification: 'AMD Ryzen 9, RTX 4090, 64GB RAM',
  guarantee: {
    start: '2024-02-10 14:30:00', end: '2026-02-10 14:30:00'
  },
  price: [{value: 2800, symbol: 'USD', isDefault: 0}, {
    value: 72800,
    symbol: 'UAH',
    isDefault: 1
  }],
  orderId: 2,
  status: 'free',
  date: '2024-02-10 14:30:00'
}, {
  id: 9,
  serialNumber: 9012345,
  isNew: 0,
  photo: 'monitor.png',
  title: 'Dell XPS 17 9730',
  type: 'Laptops',
  specification: 'Intel i9, RTX 4070, 32GB RAM',
  guarantee: {
    start: '2024-02-10 14:30:00', end: '2026-02-10 14:30:00'
  },
  price: [{value: 2300, symbol: 'USD', isDefault: 0}, {
    value: 59800,
    symbol: 'UAH',
    isDefault: 1
  }],
  orderId: 2,
  status: 'free',
  date: '2024-02-10 14:30:00'
}, {
  id: 10,
  serialNumber: 1234560,
  isNew: 0,
  photo: 'monitor.png',
  title: 'HP Spectre x360 16"',
  type: 'Laptops',
  specification: 'Intel i7, 32GB RAM, 2TB SSD',
  guarantee: {
    start: '2024-02-10 14:30:00', end: '2026-02-10 14:30:00'
  },
  price: [{value: 1800, symbol: 'USD', isDefault: 0}, {
    value: 46800,
    symbol: 'UAH',
    isDefault: 1
  }],
  orderId: 2,
  status: 'free',
  date: '2024-02-10 14:30:00'
}, {
  id: 11,
  serialNumber: 2345670,
  isNew: 1,
  photo: 'monitor.png',
  title: 'Logitech MX Master 3S',
  type: 'Mouse',
  specification: 'Wireless, 8000 DPI, USB-C',
  guarantee: {
    start: '2024-03-05 09:15:00', end: '2025-03-05 09:15:00'
  },
  price: [{value: 80, symbol: 'USD', isDefault: 0}, {
    value: 2080,
    symbol: 'UAH',
    isDefault: 1
  }],
  orderId: 3,
  status: 'free',
  date: '2024-03-05 09:15:00'
}, {
  id: 12,
  serialNumber: 3456780,
  isNew: 1,
  photo: 'monitor.png',
  title: 'Razer DeathAdder V3 Pro',
  type: 'Mouse',
  specification: 'Wireless, 30K DPI, 63g',
  guarantee: {
    start: '2024-03-05 09:15:00', end: '2025-03-05 09:15:00'
  },
  price: [{value: 120, symbol: 'USD', isDefault: 0}, {
    value: 3120,
    symbol: 'UAH',
    isDefault: 1
  }],
  orderId: 3,
  status: 'free',
  date: '2024-03-05 09:15:00'
}, {
  id: 13,
  serialNumber: 4567890,
  isNew: 0,
  photo: 'monitor.png',
  title: 'Logitech G Pro X Superlight',
  type: 'Mouse',
  specification: 'Wireless, 25K DPI, 63g',
  guarantee: {
    start: '2024-03-05 09:15:00', end: '2025-03-05 09:15:00'
  },
  price: [{value: 130, symbol: 'USD', isDefault: 0}, {
    value: 3380,
    symbol: 'UAH',
    isDefault: 1
  }],
  orderId: 3,
  status: 'repair',
  date: '2024-03-05 09:15:00'
}, {
  id: 14,
  serialNumber: 5678901,
  isNew: 0,
  photo: 'monitor.png',
  title: 'SteelSeries Aerox 9',
  type: 'Mouse',
  specification: 'Wireless, 18K DPI, 89g',
  guarantee: {
    start: '2024-03-05 09:15:00', end: '2025-03-05 09:15:00'
  },
  price: [{value: 110, symbol: 'USD', isDefault: 0}, {
    value: 2860,
    symbol: 'UAH',
    isDefault: 1
  }],
  orderId: 3,
  status: 'free',
  date: '2024-03-05 09:15:00'
}, {
  id: 15,
  serialNumber: 6789012,
  isNew: 1,
  photo: 'monitor.png',
  title: 'Corsair Darkstar RGB',
  type: 'Mouse',
  specification: 'Wireless, 26K DPI, MMO',
  guarantee: {
    start: '2024-03-05 09:15:00', end: '2025-03-05 09:15:00'
  },
  price: [{value: 140, symbol: 'USD', isDefault: 0}, {
    value: 3640,
    symbol: 'UAH',
    isDefault: 1
  }],
  orderId: 3,
  status: 'free',
  date: '2024-03-05 09:15:00'
}, {
  id: 16,
  serialNumber: 7890123,
  isNew: 1,
  photo: 'monitor.png',
  title: 'ASUS ROG Harpe Ace Aim Lab',
  type: 'Mouse',
  specification: 'Wireless, 36K DPI, 54g',
  guarantee: {
    start: '2024-03-05 09:15:00', end: '2025-03-05 09:15:00'
  },
  price: [{value: 125, symbol: 'USD', isDefault: 0}, {
    value: 3250,
    symbol: 'UAH',
    isDefault: 1
  }],
  orderId: 3,
  status: 'free',
  date: '2024-03-05 09:15:00'
}, {
  id: 17,
  serialNumber: 8901234,
  isNew: 1,
  photo: 'monitor.png',
  title: 'Logitech G915 TKL',
  type: 'Keyboard',
  specification: 'Wireless, Mechanical, RGB',
  guarantee: {
    start: '2024-04-12 11:20:00', end: '2026-04-12 11:20:00'
  },
  price: [{value: 180, symbol: 'USD', isDefault: 0}, {
    value: 4680,
    symbol: 'UAH',
    isDefault: 1
  }],
  orderId: 4,
  status: 'free',
  date: '2024-04-12 11:20:00'
}, {
  id: 18,
  serialNumber: 9012345,
  isNew: 1,
  photo: 'monitor.png',
  title: 'Razer BlackWidow V4 Pro',
  type: 'Keyboard',
  specification: 'Wired, Mechanical, RGB',
  guarantee: {
    start: '2024-04-12 11:20:00', end: '2026-04-12 11:20:00'
  },
  price: [{value: 200, symbol: 'USD', isDefault: 0}, {
    value: 5200,
    symbol: 'UAH',
    isDefault: 1
  }],
  orderId: 4,
  status: 'free',
  date: '2024-04-12 11:20:00'
}, {
  id: 19,
  serialNumber: 1234567,
  isNew: 0,
  photo: 'monitor.png',
  title: 'Keychron Q1 Pro',
  type: 'Keyboard',
  specification: 'Wireless, Mechanical, Aluminum',
  guarantee: {
    start: '2024-04-12 11:20:00', end: '2026-04-12 11:20:00'
  },
  price: [{value: 160, symbol: 'USD', isDefault: 0}, {
    value: 4160,
    symbol: 'UAH',
    isDefault: 1
  }],
  orderId: 4,
  status: 'repair',
  date: '2024-04-12 11:20:00'
}, {
  id: 20,
  serialNumber: 2345678,
  isNew: 1,
  photo: 'monitor.png',
  title: 'Corsair K100 RGB',
  type: 'Keyboard',
  specification: 'Wired, Optical, RGB',
  guarantee: {
    start: '2024-04-12 11:20:00', end: '2026-04-12 11:20:00'
  },
  price: [{value: 220, symbol: 'USD', isDefault: 0}, {
    value: 5720,
    symbol: 'UAH',
    isDefault: 1
  }],
  orderId: 4,
  status: 'free',
  date: '2024-04-12 11:20:00'
}, {
  id: 21,
  serialNumber: 3456789,
  isNew: 1,
  photo: 'monitor.png',
  title: 'SteelSeries Apex Pro TKL',
  type: 'Keyboard',
  specification: 'Wired, OmniPoint, RGB',
  guarantee: {
    start: '2024-04-12 11:20:00', end: '2026-04-12 11:20:00'
  },
  price: [{value: 190, symbol: 'USD', isDefault: 0}, {
    value: 4940,
    symbol: 'UAH',
    isDefault: 1
  }],
  orderId: 4,
  status: 'free',
  date: '2024-04-12 11:20:00'
}, {
  id: 22,
  serialNumber: 4567890,
  isNew: 1,
  photo: 'monitor.png',
  title: 'SteelSeries Arctis Nova Pro Wireless',
  type: 'Headset',
  specification: 'Wireless, ANC, Hi-Res',
  guarantee: {
    start: '2024-05-18 16:45:00', end: '2026-05-18 16:45:00'
  },
  price: [{value: 300, symbol: 'USD', isDefault: 0}, {
    value: 7800,
    symbol: 'UAH',
    isDefault: 1
  }],
  orderId: 5,
  status: 'free',
  date: '2024-05-18 16:45:00'
}, {
  id: 23,
  serialNumber: 5678901,
  isNew: 0,
  photo: 'monitor.png',
  title: 'Logitech G Pro X 2 Lightspeed',
  type: 'Headset',
  specification: 'Wireless, Blue VO!CE',
  guarantee: {
    start: '2024-05-18 16:45:00', end: '2026-05-18 16:45:00'
  },
  price: [{value: 200, symbol: 'USD', isDefault: 0}, {
    value: 5200,
    symbol: 'UAH',
    isDefault: 1
  }],
  orderId: 5,
  status: 'free',
  date: '2024-05-18 16:45:00'
}, {
  id: 24,
  serialNumber: 6789012,
  isNew: 1,
  photo: 'monitor.png',
  title: 'Beyerdynamic DT 990 Pro',
  type: 'Headset',
  specification: 'Wired, Open-back, 250 Ohm',
  guarantee: {
    start: '2024-05-18 16:45:00', end: '2026-05-18 16:45:00'
  },
  price: [{value: 150, symbol: 'USD', isDefault: 0}, {
    value: 3900,
    symbol: 'UAH',
    isDefault: 1
  }],
  orderId: 5,
  status: 'repair',
  date: '2024-05-18 16:45:00'
}, {
  id: 25,
  serialNumber: 7890123,
  isNew: 1,
  photo: 'monitor.png',
  title: 'Sony WH-1000XM5',
  type: 'Headset',
  specification: 'Wireless, ANC, LDAC',
  guarantee: {
    start: '2024-05-18 16:45:00', end: '2026-05-18 16:45:00'
  },
  price: [{value: 350, symbol: 'USD', isDefault: 0}, {
    value: 9100,
    symbol: 'UAH',
    isDefault: 1
  }],
  orderId: 5,
  status: 'free',
  date: '2024-05-18 16:45:00'
}, {
  id: 26,
  serialNumber: 8901234,
  isNew: 0,
  photo: 'monitor.png',
  title: 'HyperX Cloud Alpha Wireless',
  type: 'Headset',
  specification: 'Wireless, 300h battery',
  guarantee: {
    start: '2024-05-18 16:45:00', end: '2026-05-18 16:45:00'
  },
  price: [{value: 180, symbol: 'USD', isDefault: 0}, {
    value: 4680,
    symbol: 'UAH',
    isDefault: 1
  }],
  orderId: 5,
  status: 'free',
  date: '2024-05-18 16:45:00'
}];
const orders = [{
  id: 1,
  title: 'Длинное предлинное длиннючее название прихода',
  date: '2024-01-15 10:00:00',
  description: 'Поставка игровых мониторов для киберспортивного клуба',
  productsCount: 5
}, {
  id: 2,
  title: 'Длинное название прихода',
  date: '2024-02-10 14:30:00',
  description: 'Закупка мощных ноутбуков для команды разработки',
  productsCount: 5
}, {
  id: 3,
  title: 'Длинное предлинное название прихода',
  date: '2024-03-05 09:15:00',
  description: 'Разные модели игровых мышей',
  productsCount: 6
}, {
  id: 4,
  title: 'Длинное предлинное длиннючее название прихода',
  date: '2024-04-12 11:20:00',
  description: 'Клавиатуры для офиса и игр',
  productsCount: 5
}, {
  id: 5,
  title: 'Длинное название прихода',
  date: '2024-05-18 16:45:00',
  description: 'Беспроводные гарнитуры высокого класса',
  productsCount: 5
}];
const db = {
  orders: {
    getAll: () => orders, getById: (id) => {
      const order = orders.find(o => o.id === Number(id));
      if (order) {
        const orderProducts = products.filter(p => p.orderId === order.id);
        return {...order, products: orderProducts};
      }
      return null;
    }, delete: (id) => {
      const index = orders.findIndex(o => o.id === Number(id));
      if (index !== -1) {
        orders.splice(index, 1);
        return true;
      }
      return false;
    }
  }, products: {
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