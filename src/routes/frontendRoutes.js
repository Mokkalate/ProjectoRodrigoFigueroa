const express = require('express');
const router = express.Router();
const loadAppHtml = require('../utils/loadAppHtml');

const tipo_plantilla = 'frontend';

router.get('/', (req, res) => {
    loadAppHtml(tipo_plantilla, 'index',`${process.env.APP_NAME}: Principal` , 'Bienvenido al sitio principal', res);
});

router.get('/animales', (req, res) => {
    loadAppHtml(tipo_plantilla, 'animales', `${process.env.APP_NAME}: Animales`, 'Pienza en un animal.', res);
});

router.get('/horoscopo', (req, res) => {
    loadAppHtml(tipo_plantilla, 'Horoscopo', `${process.env.APP_NAME}: Leemos tu futuro?`, 'Quieres saber tu futuro?.', res);
});

router.get('/calculadora', (req, res) => {
    loadAppHtml(tipo_plantilla, 'calculadora', `${process.env.APP_NAME}: Calculadora`, 'Correo de contacto: example@example.cl', res);
});

module.exports = router;
 