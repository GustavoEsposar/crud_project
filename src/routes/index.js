
const router = require('express').Router();

const CustomersController = require('../controllers/customers')

// --------------------------->     rotes

router.get('/', (req, res) => {
    res.render('index', {
        title: 'Titulo Teste'
    })
})

router.get('/register', (req, res) => {
    res.render('register', {
        title: 'Cadastro de Clientes'
    })
})

router.post('/register/add', CustomersController.add)

router.use((req, res) => {
    res.send('Página não encontrada!')
})

module.exports = router;
