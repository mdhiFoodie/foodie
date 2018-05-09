const mongoose = require('mongoose');
const { Schema } = require('mongoose');


mongoose.connect('mongodb://localhost/foodie');

const sampleSchema = new Schema({
  name: String,
  secret: String
})

const sampleModel = mongoose.model('sample', sampleSchema);

const samplemodelInstance = new sampleModel({ name: 'testing', secret: 'success'});

samplemodelInstance.save()
  .then( () => {
    console.log('mongo queries connected');
  })
  .catch( () => {
    console.log('error mongo queries');
  });



  module.exports = mongoose;