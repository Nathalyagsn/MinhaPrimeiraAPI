const express = require("express")
const router = express.Router()

const app = express()
const porta  = 3333

function mostraMulher(request, response) {
response.json({
    nome: 'Simone de Beauvoir',
    imagem: 'https://i0.wp.com/outraspalavras.net/outrosquinhentos/wp-content/uploads/sites/8/2020/01/simoneb.jpg?fit=1200%2C640&ssl=1',
    minibio: 'Escritora, filosofa, ativista e feminista.'
 })
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get('/mulher', mostraMulher))
app.listen(porta, mostraPorta)