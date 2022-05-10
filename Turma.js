const Sequelize = require('sequelize');
const db = require("./conexao");
const Turma = db.define('turma', {
    codigo:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    descricao:{
        type: Sequelize.TEXT,
        allowNull: false,
    }   
},{
    timestamps: true,
    tableName: 'turma',
  }
);

//Cria a tabela
Turma.sync({alter:true});
module.exports = Turma;