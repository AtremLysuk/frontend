const express = require('express');
const router = express.Router();
const db = require('../data/db');

router.get('/', (req, res) => {
  const orders = db.orders.getAll();
  res.json(orders);
});

router.get('/:id', (req, res) => {
  const order = db.orders.getById(req.params.id);
  if (!order) {
    return res.status(404).json({ message: 'Приход не найден' });
  }

  const products = db.products.getByOrderId(order.id);
  res.json({ ...order, products });
});

router.delete('/:id', (req, res) => {
  const deleted = db.orders.delete(req.params.id);
  if (!deleted) {
    return res.status(404).json({ message: 'Приход не найден' });
  }
  res.json({ message: 'Приход удален' });
});

module.exports = router;