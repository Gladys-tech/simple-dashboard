const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    name : {type: String, required: true},
    email : {type: String, required: true},
    address: {type:String, required: true},
    contact: {type:Number, required: true},
    orderItems : [],
    orderAmount:{type: Number, required: true},
    isDelivered:{type: Boolean,  default:false},
    contact: {type:Number, required: true},
    
    
   
  
},{
    timestamps: true,
});

module.exports = mongoose.model('orders', orderSchema);