var express = require('express');
var app = express()
app.use(express.json())
var con = require('./conexao')
var Equipamento = require('./Equipamento')
var Aula = require('./Aula')
var Professor = require('./Professor')
var Turma = require('./Turma')
var Agendamento = require('./Agendamento')


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

app.get('/turma', async (req, res) =>{
    try {
        const turma = await Turma.findAll();
        return res.status(200).json(turma)
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
app.get('/professores', async (req, res) =>{
    try {
        const professor = await Professor.findAll();
        return res.status(200).json(professor)
    } catch{

    }    
})

app.post('/professores', async (req, res) =>{
    await Professor.create(req.body)
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

app.post('/turma', async (req, res) =>{
    await Turma.create(req.body)
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

app.get('/agendamentos', async (req, res) =>{
    try {
        const agendamento = await Agendamento.findAll();
        return res.status(200).json(agendamento)
    } catch{

    }    
})

app.post('/agendamentos', async (req, res) =>{
    await Agendamento.create(req.body)
        .then(() => {
            return res.status(200).json({
                erro: false,
                mensagem: "Agendamento realizado com sucesso"
            })
        }).catch(()=>{
            return res.status(400).json({
                erro: true,
                mensagem: "Erro ao cadastrar Usuário"
            });
})

})

app.listen(5000, () => {console.log("servidor ligado")})