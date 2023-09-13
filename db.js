const mongoose = require('mongoose');

var mongoURL = 'mongodb+srv://gladys:WjjEPzjivEn36Vbx@cluster0.pjjuj.mongodb.net/bakeryorders';

mongoose.connect(mongoURL, {useUnifiedTopology:true, useNewUrlParser: true})

var db = mongoose.connection

db.on('connected', ()=>{
   console.log(`mongo db connected successfuly`) ;
})

db.on('error', ()=>{
    console.log(`mongo db connectection failed`) ;
 })

 module.exports = mongoose;