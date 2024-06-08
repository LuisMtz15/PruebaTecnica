const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Acertijo1 = sequelize.define('Acertijo1', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  usuario: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  tiempo: {
    type: DataTypes.STRING(20),
    allowNull: false
  }
},{freezeTableName: true});


const Acertijo2 = sequelize.define('Acertijo2', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    usuario: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    tiempo: {
      type: DataTypes.STRING(20),
      allowNull: false
    }
  },{freezeTableName: true});

  const Acertijo3 = sequelize.define('Acertijo3', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    usuario: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    tiempo: {
      type: DataTypes.STRING(20),
      allowNull: false
    }
  },{freezeTableName: true});

module.exports = {Acertijo1, Acertijo2, Acertijo3};
