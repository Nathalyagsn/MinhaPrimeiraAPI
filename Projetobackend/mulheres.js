const express = require("express") //iniciando o express

const router = express.Router() // configurando a primeira parte da rota

const { v4: uuidv4 } = require('uuid')

const conectaBancoDeDados = require('./bancoDeDados')
conectaBancoDeDados()

const app = express() //iniciando o app

app.use(express.json())

const porta  = 3333 //criando a porta


//criando lista inicial de mulheres
const mulheres = [
    {
        id: '1',
        nome: 'JK Rowling',
       imagem: 'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSpj56ZHu--rSzpHSGEUbJUCshy14wtFw3Tn-UcpsKCcx1w4cboDRAWB2diZb3fVJTTDYObrpzqi5qWe8Y',
       minibio: 'Escritora, roteirista e produtora'
    },
    {
        id: '2',
        nome:'Chimamanda Ngozi Adichie',
        imagem: 'https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQltPEIiGTq_ci6VO-LE4EgsGA1yAFDqX6ylNoz57GqqXd79UHGa34fMBzsctTDYpWU4xCs-3HvaLojYag',
        minibio: 'Escritora'
    },
    {
        id: '3',
        nome: 'FitGirl',
        imagem: 'https://torrentfreak.com/images/fitgirl-1.png',
        minibio: 'Deusa da pirataria de jogos'
    }
]

//GET
function mostraMulheres(request, response) {
    response.json(mulheres)
}

//POST
function criaMulher(request, response) {
    const novaMulher = {
        id: uuidv4(),
        nome: request.body.nome,
        imagem: request.body.imagem,
        minibio: request.body.minibio
    }

    mulheres.push(novaMulher)

    response.json(mulheres)
}

//PATCH
function corrigeMulher(request, response) {
    function encontraMulher(mulher) {
        if(mulher.id === request.params.id) {
            return mulher;
        }
    }

    const mulherEncontrada = mulheres.find(encontraMulher);

    if(request.body.nome) {
        mulherEncontrada.nome = request.body.nome
    }

    if(request.body.imagem) {
        mulherEncontrada.imagem = request.body.imagem
    }

    if(request.body.minibio) {
        mulherEncontrada.minibio = request.body.minibio
    }

    response.json(mulheres)
}

//DELETE
function deletaMulher(request, response){
    function todasMenosEla(mulher) {
        if(mulher.id !== request.params.id) {
            return mulher
        }
    }

    const mulheresQueFicam = mulheres.filter(todasMenosEla)

    response.json(mulheresQueFicam)
}

//PORTA
function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}


app.use(router.get('/mulheres', mostraMulheres))//rota get configurada /mulheres

app.use(router.post('/mulheres', criaMulher)) // rota POST /mulheres configurada

app.use(router.patch('/mulheres/:id', corrigeMulher)) //rota patch /mulheres/:id configurada

app.use(router.delete('/mulheres/:id',deletaMulher )) //deletar mulher configurado

app.listen(porta, mostraPorta) //servidor ouvindo a porta
