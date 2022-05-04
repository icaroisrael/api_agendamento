const Sequelize = require('sequelize')
const sequelize = new Sequelize("agendamento", "root", "123456", {
    host:    'localhost',
    dialect: 'mysql'
})
sequelize.authenticate().then(() => {console.log("Conexão realizada com sucesso")}).catch(() =>{console.log("Erro na conexão")})
module.exports = sequelize;