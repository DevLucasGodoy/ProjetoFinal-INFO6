const Sequelize = require('sequelize')

require('dotenv').config()

const sequelize = new Sequelize ('icfkekto','icfkekto', 'Cewo3giVALNpGPBCuySBmtwTXQ19z7L1', {
  host: process.env.HOST,
  dialect: process.env.DIALECT,
  define:{
    charset:'utf8',
    collate:'utf8_general_ci',
    timestamps:true
  },
  logging:false
})

sequelize.authenticate().then(function(){
  console.log('Conectado no banco com sucesso!');
}).catch(function(err){
  console.log('Erro ao conectar com o banco')
})

module.exports = {Sequelize, sequelize};