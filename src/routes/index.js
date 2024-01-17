
const router = require('express').Router();

// --------------------------->     rotes

router.get('/', (req, res) => {
    res.render('index', {
        title: 'Titulo Teste'
    })
})

router.use((req, res) => {
    res.send('Pagina não encontrada!')
})

module.exports = router;
