const mongoose = require('mongoose')
const {Schema} = mongoose

const formSchema = new Schema({
    name : String,
    dob: String,
    email: {type: String, required : true, unique : true},
    phone: {type: String, required : true, maxLength : 10, minLength : 10}
})

module.exports = mongoose.model("form",formSchema)