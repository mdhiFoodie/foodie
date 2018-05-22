const mongoose = require('../mongo/index');
const { Schema } = require('mongoose');
const menus = require('./menuData');


const menuSchema = new Schema({
  biz_id: Number,
  biz_name: String,
  menu: String
});

const Menus = mongoose.model('menu', menuSchema);

const losBurritosInstance = new Menus({ biz_id: 4, biz_name: 'Isabella\'s Guatemalan Bazaar', menu:JSON.stringify(menus.losBurritosMenu)});
const huntersInstance = new Menus({ biz_id: 3, biz_name: 'Hunters', menu:JSON.stringify(menus.hunters)});
const michaelsCheeseAndBreadEmporiumInstance = new Menus({ biz_id: 1, biz_name: 'Michael\'s Cheese and Bread Emporium', menu:JSON.stringify(menus.michaelsCheeseAndBreadEmporium)});
const danielsKoreanBBQInstance = new Menus({ biz_id: 2, biz_name: 'Daniel\'s Korean BBQ', menu:JSON.stringify(menus.danielsKoreanBBQ)});

losBurritosInstance.save()
.then( () => {
  console.log('successfully saved isabelas burrito menu to mongodb');
})
.catch( () => {
  console.log('error loading burrito menu');
});
huntersInstance.save()
.then( () => {
  console.log('successfully saved hunters menu to mongodb');
})
.catch( () => {
  console.log('error loading burrito menu');
});
michaelsCheeseAndBreadEmporiumInstance.save()
.then( () => {
  console.log('successfully saved cheese and bread menu to mongodb');
})
.catch( () => {
  console.log('error loading burrito menu');
});
danielsKoreanBBQInstance.save()
.then( () => {
  console.log('successfully saved dans bbq menu to mongodb');
})
.catch( () => {
  console.log('error loading burrito menu');
});

module.exports = Menus;