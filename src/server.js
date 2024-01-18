// --------------------------->     Imported Modules
const express = require('express');
const path = require('path');
// --------------------------->     Created modules
const db = require('./database');
const routes = require('./routes');
// --------------------------->     database settings
// database connection
db.connect()

// --------------------------->     app settings
const app = express();

//define template engine
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

//defining public files
app.use(express.static(path.join(__dirname, 'public'))) 

//enable server to receive data through POST (forms)
app.use(express.urlencoded({ extended: true }))

//defining routes
app.use('/', routes)

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Server is listening on port ${port}`))