const express = require('express');
const router = express.Router();

const {ObtenerAcertijo1, ObtenerAcertijo2, ObtenerAcertijo3, AgrergarAcertijo1, AgrergarAcertijo2, AgrergarAcertijo3} = require('../controllers/AcertijosController');

router.get('/acertijo1', ObtenerAcertijo1);
router.get('/acertijo2', ObtenerAcertijo2);
router.get('/acertijo3', ObtenerAcertijo3);
router.post('/agregar-acertijo1', AgrergarAcertijo1);
router.post('/agregar-acertijo2', AgrergarAcertijo2);
router.post('/agregar-acertijo3', AgrergarAcertijo3);

module.exports = router;