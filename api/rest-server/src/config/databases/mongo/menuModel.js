const mongoose = require('../mongo/index');
const { Schema } = require('mongoose');
const losBurritosMenu = require('./menuData');


const menuSchema = new Schema({
  biz_id: Number,
  biz_name: String,
  menu: String
})

const Menus = mongoose.model('menu', menuSchema);

const losBurritosInstance = new Menus({ biz_id: 5, biz_name: 'Los Burritos', menu:JSON.stringify(losBurritosMenu)});

losBurritosInstance.save()
.then( () => {
  console.log('successfully saved los burrito menu to mongodb');
})
.catch( () => {
  console.log('error loading burrito menu');
});

module.exports = Menus;