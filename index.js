const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const bodyParser = require('body-parser')
const Produto = require('./models/Produto')


app.get('/', (req, res) => {
  Produto.findAll().then((valores)=>{
    return res.json(valores) 
}).catch((err)=>{
    console.log(`Houve um problema: ${err}`)
})
})


app.listen(PORT, () => {
  console.log('Servidor rodando em http://localhost:' + PORT)
})
