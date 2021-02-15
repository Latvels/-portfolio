const express = require('express')
const mongoose = require('mongoose')
const expnbs = require('express-handlebars')
const todoRouts = require('./routes/todos')
const path = require('path')

const PORT = process.env.PORT || 3000

const app = express()

const hbs = expnbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'public')))

app.use(todoRouts)

async function start() {
    try {
        await mongoose.connect(
            'mongodb+srv://Latvels:Qw123456@cluster0.0n9ip.mongodb.net/todos', 
            {
            useNewUrlParser: true,
            useFindAndModify: false
        })
        app.listen(PORT, () => {
            console.log("Server has been started...")
        })
    } catch(e) {
        console.log(e)
    }
}

start()
