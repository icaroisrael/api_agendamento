const Sequelize = require('sequelize');
const db = require("./conexao");
const Professor = db.define('professor', {
    codigo:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome:{
        type: Sequelize.TEXT,
        allowNull: false,
    },
    sobrenome:{
        type: Sequelize.TEXT,
        allowNull: false,
    },
    email:{
        type: Sequelize.TEXT,
        allowNull: false,
    }
    
}, {
    timestamps: true,
    tableName: 'professor',
  });

//Cria a tabela
Professor.sync({alter:true});
module.exports = Professor;