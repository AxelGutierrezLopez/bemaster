const { Router } = require('express');
const router = Router();
const fetch = require('node-fetch');
const token = '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';
let url = 'https://api.github.com/users/google/repos?sort=pushed&direction=desc&per_page=10';

router.get('/ejercicio01', async (req, res) => {
  const response = await fetch(url,{
    headers: {Authentication: `Bearer ${token}`}
  });
  const repos = await response.json();
  let num = 10;
  repos.forEach(repo => {
    repo['num'] = num;
    num--;
  })
  
  res.render('ejercicio01',{repos : repos});
});

module.exports = router;