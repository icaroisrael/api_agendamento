const Sequelize = require('sequelize');
const db = require("./conexao");
const Professor = require("./Professor")
const Equipamento = require("./Equipamento")
const Turma = require("./Turma")
const Aula = require("./Aula")

const Agendamento = db.define('agendamento', {
    codigo:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    }    
    
}, {
    timestamps: true,
    tableName: 'agendamento',
  });

  Professor.hasOne(Agendamento);
  Agendamento.belongsTo(Professor, {
    onDelete: 'CASCATE',
    onUpdate: 'CASCATE'
  });

  Equipamento.hasOne(Agendamento);
  Agendamento.belongsTo(Equipamento, {
    onDelete: 'CASCATE',
    onUpdate: 'CASCATE'
  });

  Turma.hasOne(Agendamento);
  Agendamento.belongsTo(Turma, {
    onDelete: 'CASCATE',
    onUpdate: 'CASCATE'
  });

  Aula.hasOne(Agendamento);
  Agendamento.belongsTo(Aula, {
    onDelete: 'CASCATE',
    onUpdate: 'CASCATE'
  });
  
  
 
//Cria a tabela
//Agendamento.sync({alter:true});
module.exports = Agendamento;


