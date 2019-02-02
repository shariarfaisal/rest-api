const express = require('express');
const morgan = require('morgan')
const bodyParser = require('body-parser')
const contactRoute = require('./api/routes/contact')
const userRoute = require('./api/routes/user')
const cors = require('cors')
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true});


const db = mongoose.connection
db.on('error', (err) => {
  console.log(err);
})
db.once('open',() => {
  console.log('Database connection established');
})



const PORT = process.env.PORT || 3000

const app = express()
app.use(morgan('dev'))
app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use('/api/contacts',contactRoute)
app.use('/api/users',userRoute)

app.listen(PORT,() => {
  console.log(`server is runing on port ${PORT}`);
})
