const express = require('express');
const router = express.Router();
const db = require('../data/db');

router.get('/', (req, res) => {
  const { type } = req.query;
  let products = db.products.filterByType(type);

  products = products.map(product => {
    const order = db.orders.getById(product.orderId);
    return {
      ...product,
      orderTitle: order?.title || 'Неизвестный приход'
    };
  });

  res.json(products);
});

router.get('/types', (req, res) => {
  const types = db.products.getTypes();
  res.json(types);
});

router.get('/order/:orderId', (req, res) => {
  const products = db.products.getByOrderId(req.params.orderId);
  res.json(products);
});

module.exports = router;