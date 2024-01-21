
const router = require('express').Router();

const CustomersController = require('../controllers/customers')
const IndexController = require('../controllers/index')

// --------------------------->     rotes

router.get('/', IndexController.index)

router.get('/register', CustomersController.index)

router.post('/register/add', CustomersController.add)

router.get('/list', CustomersController.list)

router.get('/edit', CustomersController.formEdit)

router.post('/edit/:id', CustomersController.edit)

router.use((req, res) => {
    res.send('Página não encontrada!')
})

module.exports = router;
