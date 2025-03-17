const mongoose = require('mongoose')

const HotelSchema = new mongoose.Schema({
    EName : {type:String,required : true},
    EMail : {type:String,required : true},
    EPassword : {type:String,required:true}
})

module.exports = mongoose.model('Hotel',HotelSchema)