const Sequelize = require('sequelize');
const db = require("./conexao");
const Aula = db.define('aula', {
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
    tableName: 'aula',
  }
);

//Cria a tabela
Aula.sync({alter:true});
module.exports = Aula;