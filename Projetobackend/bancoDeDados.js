const mongoose = require('mongoose')

async function conectaBancoDeDados() {
   try{
    console.log('Conexão com o banco de dados foi concluída.')

    await mongoose.connect('mongodb+srv://nathalyagsn:uXBWqCgG5guhoEc5@clustermulheres.hxfut.mongodb.net/?retryWrites=true&w=majority&appName=ClusterMulheres')

    console.log('Conexão com o banco de dados feita com sucesso.')
   } catch(erro) {
        console.log(erro)
   }
}

module.exports = conectaBancoDeDados