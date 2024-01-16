const express = require('express');
const path = require('path');

const app = express();

//define template engine
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

//defining public files
app.use(express.static(path.join(__dirname, 'public'))) 

//enable server to receive data through POST (forms)
app.set(express.urlencoded({ extended: true }))

// --------------------------->     rotes
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Titulo Teste'
    })
})

app.use((req, res) => {
    res.send('Pagina não encontrada!')
})

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Server is listening on port ${port}`))