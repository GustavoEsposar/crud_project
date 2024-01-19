
const router = require('express').Router();

const CustomersController = require('../controllers/customers')
const IndexController = require('../controllers/index')

// --------------------------->     rotes

router.get('/', IndexController.index)

router.get('/register', CustomersController.index)

router.post('/register/add', CustomersController.add)

router.get('/list', CustomersController.listUsers)

router.use((req, res) => {
    res.send('Página não encontrada!')
})

module.exports = router;
