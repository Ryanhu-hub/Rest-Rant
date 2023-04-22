//modules and globals
require('dotenv').config()
const express = require('express')
const app = express()
const methodOverride = require('method-override')

//express settings
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))


// places folder
app.use('/places', require('./controllers/places'))

// Home page
app.get('/', (req, res) => {
  res.render('home')
})

// 404 page
app.get('*', (req, res) => {
  res.render('error404')
})

//LISTEN
app.listen(process.env.PORT)

