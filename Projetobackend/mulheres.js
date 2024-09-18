const express = require("express")
const router = express.Router()

const app = express()
const porta  = 3333

const mulheres = [
    {
       nome: 'JK Rowling',
       imagem: 'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSpj56ZHu--rSzpHSGEUbJUCshy14wtFw3Tn-UcpsKCcx1w4cboDRAWB2diZb3fVJTTDYObrpzqi5qWe8Y',
       minibio: 'Escritora, roteirista e produtora'
    },
    {
        nome:'Chimamanda Ngozi Adichie',
        imagem: 'https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQltPEIiGTq_ci6VO-LE4EgsGA1yAFDqX6ylNoz57GqqXd79UHGa34fMBzsctTDYpWU4xCs-3HvaLojYag',
        minibio: 'Escritora'
    },
    {
        nome: 'FitGirl',
        imagem: 'https://torrentfreak.com/images/fitgirl-1.png',
        minibio: 'Deusa da pirataria de jogos'
    }
]

function mostraMulheres(request, response) {
    response.json(mulheres)
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)