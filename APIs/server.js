require('dotenv').config();
const express = require('express');
const sequelize = require('./config/database');
const cors = require('cors');



const acertijoRoutes = require('./routes/acertijoRoutes');


const app = express();
app.use(express.json());
app.use(cors());

sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
    return sequelize.sync();
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

app.use('/acertijos', acertijoRoutes);

app.listen(process.env.PORT || 3000, () => {
  console.log('\n \n \n Server is running \n \n \n');
});