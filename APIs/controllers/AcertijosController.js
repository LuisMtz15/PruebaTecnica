const {Acertijo1, Acertijo2, Acertijo3} = require('../models/Acertijos');
const { Op } = require('sequelize');

// Obtener acertijos
exports.ObtenerAcertijo1 = async (req, res) => {
    try {
        const acertijos = await Acertijo1.findAll({ attributes: ['usuario', 'tiempo'] });
        const acertijosOrdenados = acertijos.sort((a, b) => {
            const tiempoA = parseInt(a.tiempo.split(':')[1]);
            const tiempoB = parseInt(b.tiempo.split(':')[1]);
            return tiempoB - tiempoA;
        });

        res.json(acertijosOrdenados);
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Hubo un error' });
    }
}

// Agregar acertijo
exports.AgrergarAcertijo1 = async (req, res) => {
    const {usuario, tiempo} = req.body;
    try {
        const acertijo = await Acertijo1.create({usuario, tiempo});
        res.json(acertijo);
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: 'Hubo un error'});
    }
}

// Obtener acertijos para el acertijo 2
exports.ObtenerAcertijo2 = async (req, res) => {
    try {
        const acertijos = await Acertijo2.findAll({ attributes: ['usuario', 'tiempo'] });
        const acertijosOrdenados = acertijos.sort((a, b) => {
            const tiempoA = parseInt(a.tiempo.split(':')[1]);
            const tiempoB = parseInt(b.tiempo.split(':')[1]);
            return tiempoB - tiempoA;
        });

        res.json(acertijosOrdenados);
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Hubo un error' });
    }
}

// Agregar acertijo para el acertijo 2
exports.AgrergarAcertijo2 = async (req, res) => {
    const {usuario, tiempo} = req.body;
    try {
        const acertijo = await Acertijo2.create({usuario, tiempo});
        res.json(acertijo);
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: 'Hubo un error'});
    }
}

// Obtener acertijos para el acertijo 3
exports.ObtenerAcertijo3 = async (req, res) => {
    try {
        const acertijos = await Acertijo3.findAll({ attributes: ['usuario', 'tiempo'] });
        const acertijosOrdenados = acertijos.sort((a, b) => {
            const tiempoA = parseInt(a.tiempo.split(':')[1]); 
            const tiempoB = parseInt(b.tiempo.split(':')[1]);
            return tiempoB - tiempoA;
        });

        res.json(acertijosOrdenados);
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Hubo un error' });
    }
}

// Agregar acertijo para el acertijo 3
exports.AgrergarAcertijo3 = async (req, res) => {
    const {usuario, tiempo} = req.body;
    try {
        const acertijo = await Acertijo3.create({usuario, tiempo});
        res.json(acertijo);
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: 'Hubo un error'});
    }
}