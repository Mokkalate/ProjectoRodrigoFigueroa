const express = require('express');
const router = express.Router();
const loadAppHtml = require('../utils/loadAppHtml');

const tipo_plantilla = 'frontend';

router.get('/', (req, res) => {
    loadAppHtml(tipo_plantilla, 'index',`${process.env.APP_NAME}: Home` , 'Bienvenido al sitio principal', res);
});

router.get('/animales', (req, res) => {
    loadAppHtml(tipo_plantilla, 'animales', `${process.env.APP_NAME}: Nosotros`, 'Misión: Lorem ipsum dolor.', res);
});

router.get('/horoscopo', (req, res) => {
    loadAppHtml(tipo_plantilla, 'horoscopo', `${process.env.APP_NAME}: Servicios`, 'Diseño y Desarrollo Web.', res);
});

router.get('/calculadora', (req, res) => {
    loadAppHtml(tipo_plantilla, 'calculadora', `${process.env.APP_NAME}: Contacto`, 'Correo de contacto: example@example.cl', res);
});

module.exports = router;
