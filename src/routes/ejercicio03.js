const { Router } = require('express');
const { numeroimpar } = require('../numeroimpar');
const router = Router();

router.get('/ejercicio03', async (req, res) => {
  let noImpar = 'Sin resultados';
  let arrayNumbers = [];
  arrayNumbers.push(noImpar);
  res.render('ejercicio03', { numbers: arrayNumbers });
});

router.post('/numeroimpar',numeroimpar)

module.exports = router;
