const Order = require('../models/Order');

const orderCtrl = {};

orderCtrl.createOrder = async (req, res, next) => {
        Order.findOne({}, {}, { sort: { '_id' : -1 } }, async function(err, post) {
        
        const date = new Date();

        if(post == null){
            const order = new Order({
                idPedido: 1,
                username: req.body.username,
                total: req.body.total,
                fecha: date,
                productos: req.body.productos
            });

            await order.save();
            res.json({status: 'Order created',Order: order});
        }else{
            let lastPedido = post.idPedido;
            lastPedido++;
            const order = new Order({
                idPedido: lastPedido,
                username: req.body.username,
                total: req.body.total,
                fecha: date,
                productos: req.body.productos
            });
            await order.save();
            res.json({status: 'Order created',Order: order});
        }
    });
};

orderCtrl.getOrders = async (req, res, next) => {
    const orders = await Order.find();
    res.json(orders);
};

orderCtrl.getOrdersByUsername = async (req, res, next) => {
   console.log(req.params.username)
   const orders = await Order.find({ username:req.params.username });
    res.json(orders);
};

orderCtrl.deleteOrder = async (req, res, next) => {
    await Order.findByIdAndRemove(req.params.id);
    res.json({status: 'Order Deleted'});
};

orderCtrl.getOrder = async (req, res, next) => {
    const { id } = req.params;
    const order = await Order.findById(id);
    res.json(order);
};

module.exports = orderCtrl;