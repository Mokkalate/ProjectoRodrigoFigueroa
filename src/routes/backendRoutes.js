const express = require('express');
const router = express.Router();
const loadAppHtml = require('../utils/loadAppHtml');
const authMiddleware = require('../controllers/middlewares/authMiddleware'); // Importa el middleware
const { dashboard } = require('../controllers/backend/dashboardController');
const { usuarios } = require('../controllers/backend/usuariosController');
const { ingresarCliente, listarClientes, editarCliente, guardarEdicion, saveNewCliente ,eliminarCliente } = require('../controllers/backend/clientesController');
const { save } = require('xpress/lib/fs');
const { listarProveedores, ingresarProveedor, saveNewProveedor, eliminarProveedor, guardarEdicionProveedores, editarProveedor } = require('../controllers/backend/proveedoresController');
const tipo_plantilla = 'backend';

router.get('/dashboard', authMiddleware, dashboard);


router.get('/modulo-usuarios', authMiddleware, usuarios);

// Rutas para clientes
router.get('/modulo-listar-clientes', authMiddleware, listarClientes);
router.get('/modulo-ingresar-clientes', authMiddleware, ingresarCliente);
router.post('/modulo-ingresar-cliente', authMiddleware, saveNewCliente);
router.get('/modulo-editar-cliente/:id', authMiddleware, editarCliente);
router.post('/modulo-editar-cliente', authMiddleware, guardarEdicion);
router.get('/modulo-eliminar-cliente/:id', authMiddleware, eliminarCliente);
router.post('/modulo-eliminar-cliente', authMiddleware, eliminarCliente);

// Rutas para proveedores
router.get('/modulo-listar-proveedor', authMiddleware, listarProveedores);
router.get('/modulo-ingresar-proveedor', authMiddleware, ingresarProveedor);
router.post('/modulo-ingresar-proveedores', authMiddleware, saveNewProveedor);
router.get('/modulo-editar-proveedor/:id', authMiddleware, editarProveedor);
router.post('/modulo-editar-proveedor', authMiddleware, guardarEdicionProveedores);
router.get('/modulo-eliminar-proveedor/:id',authMiddleware,eliminarProveedor);
router.post('/modulo-eliminar-proveedor',authMiddleware,eliminarProveedor);







module.exports = router;
