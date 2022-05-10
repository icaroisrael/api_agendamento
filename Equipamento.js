const Sequelize = require('sequelize');
const db = require("./conexao");
const Equipamento = db.define('equipamento', {
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
    tableName: 'equipamento',
  },
)

//Cria a tabela
Equipamento.sync({alter:true});
module.exports = Equipamento;