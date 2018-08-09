const mongoose = require('mongoose')
const Schema = mongoose.Schema

const WidgetSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  filterType: String,
  formData: {
    title: Boolean,
    price: Boolean,
    description: Boolean,
    callToAction: Boolean,
    callToActionDesc: String,
    backgroundColor: String,
    cardColor: String,
    buttonColor: String,
    borderStyle: Boolean,
    font: String,
    fontStyle: String,
    fontColor: String,
    fontSize: String,
    alignment: String
  }
})

const Widget = mongoose.model('Widget', WidgetSchema)

module.exports = {
  Widget
}
