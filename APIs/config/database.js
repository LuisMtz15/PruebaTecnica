const {Sequelize} = require("sequelize")

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


/*const {Sequelize} = require("sequelize")

const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    protocol: 'postgres',
    dialectOptions: {
      ssl: false
    }
  });
  
  module.exports = sequelize;*/