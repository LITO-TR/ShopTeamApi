
const mongoose = require('mongoose')

const campusSchema = mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  address: {
    type: String,
    require: true
  },
  shop: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'shop'
  }
})
module.exports = mongoose.model('Campus', campusSchema)