const mongoose = require('mongoose')

mongoose.connect(process.env.MONG_URI,{ useNewUrlParser: true, useUnifiedTopology: true })
const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB Atlas connection established successfully!');
});