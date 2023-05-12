const { Router } = require('express');
const router = Router();


router.get('/ejercicio02', async (req, res) => {
  res.render('ejercicio02');
});

module.exports = router;