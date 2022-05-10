const Sequelize = require('sequelize');
const db = require("./conexao");

const Agendamento = db.define('agendamento', {
    codigo:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    professor:{
        type: Sequelize.INTEGER,
        references:{model: Professor, key: 'codigo'}       
    }  
    
}, {
    timestamps: true,
    tableName: 'agendamento',
  });




//Cria a tabela
Agendamento.sync({alter:true});
module.exports = Agendamento;


