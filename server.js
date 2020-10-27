const express = require ('express')
const cors = require('cors')
const mongoose = require ('mongoose')

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect(
'mongodb+srv://valentin:UfautxdDURtxObLa@cluster0.6shyb.mongodb.net/test?retryWrites=true&w=majority' ,{useUnifiedTopology: true, useNewUrlParser:true})

require('./src/models/Products')

app.use('/api', require('./src/routes') )

app.listen(3001)
