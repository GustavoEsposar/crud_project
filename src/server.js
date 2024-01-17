const express = require('express');
const path = require('path');
const db = require('./database');
const routes = require('./routes');

const app = express();

// database connection
db.connect()

//define template engine
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

//defining public files
app.use(express.static(path.join(__dirname, 'public'))) 

//enable server to receive data through POST (forms)
app.set(express.urlencoded({ extended: true }))

// --------------------------->     rotes
app.use('/', routes)

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Server is listening on port ${port}`))