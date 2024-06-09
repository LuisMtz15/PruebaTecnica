const {Sequelize} = require("sequelize")

// Conexion a la base de datos
const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    protocol: 'postgres',
    dialectOptions: {
      ssl: {
        require: true, //En producción
        rejectUnauthorized: false
      }
    }
  });
  
  module.exports = sequelize;
