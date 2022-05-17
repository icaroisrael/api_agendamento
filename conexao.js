const Sequelize = require('sequelize')
const sequelize = new Sequelize("heroku_0040a621851751b", "b6871c5697a734", "8951c20e", {
    host:    'us-cdbr-east-05.cleardb.net',
    dialect: 'mysql'
})
sequelize.authenticate().then(() => {console.log("Conexão realizada com sucesso")}).catch(() =>{console.log("Erro na conexão")})
module.exports = sequelize;