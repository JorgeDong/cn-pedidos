const mongoose = require('mongoose');
const { Schema } = mongoose;

const OrderSchema = new Schema({
    idPedido: { type: Number, required: true},
    username: { type: String, required: true},
    total: { type: String, required: true },
    fecha: { type: Date, required: true },
    productos: { type : Array , "default" : [] }
});

module.exports = mongoose.model('Order', OrderSchema);