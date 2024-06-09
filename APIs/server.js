require('dotenv').config();
const express = require('express');
const sequelize = require('./config/database');
const cors = require('cors');

// Importar las rutas
const acertijoRoutes = require('./routes/acertijoRoutes');

// Crear el servidor
const app = express();
// Habilitar express.json
app.use(express.json());
// Habilitar cors
app.use(cors());

// Conectar a la base de datos
sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
    return sequelize.sync();
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

// Rutas de la app
app.use('/acertijos', acertijoRoutes);

// Iniciar la app en el puerto 3000
app.listen(process.env.PORT || 3000, () => {
  console.log('\n \n \n Server is running \n \n \n');
});