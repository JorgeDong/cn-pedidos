const express = require('express');
const router = express.Router();

const orderCtrl = require('../controllers/order.controller');


router.post('/create', orderCtrl.createOrder);
router.get('/', orderCtrl.getOrders);
router.get('/username/:username', orderCtrl.getOrdersByUsername);
router.delete('/delete/:id', orderCtrl.deleteOrder);
router.get('/:id', orderCtrl.getOrder);


module.exports = router;
