var express = require('express');
var app = express()
app.use(express.json())
var con = require('./conexao')
var Equipamento = require('./Equipamento')
var Aula = require('./Aula')




//GETS
app.get('/', (req, res) =>{
    res.send("Tela de login");
})
app.get('/equipamentos', async (req, res) =>{
    try {
        const equipamentos = await Equipamento.findAll();
        return res.status(200).json(equipamentos)
    } catch{

    }
    
})

app.get('/aulas', async (req, res) =>{
    try {
        const aula = await Aula.findAll();
        return res.status(200).json(aula)
    } catch{

    }
    
})

app.get('/professores', (req, res) =>{
    res.send("professores")
})

//POSTS
app.post('/equipamentos', async (req, res) =>{
    await Equipamento.create(req.body)
        .then(() => {
            return res.status(200).json({
                erro: false,
                mensagem: "Cadastro realizado com sucesso"
            })
        }).catch(()=>{
            return res.status(400).json({
                erro: true,
                mensagem: "Erro ao cadastrar Usuário"
            });
})

})

app.post('/aulas', async (req, res) =>{
    await Aula.create(req.body)
        .then(() => {
            return res.status(200).json({
                erro: false,
                mensagem: "Cadastro realizado com sucesso"
            })
        }).catch(()=>{
            return res.status(400).json({
                erro: true,
                mensagem: "Erro ao cadastrar Usuário"
            });
})

})

app.listen(3000, () => {console.log("servidor ligado")})