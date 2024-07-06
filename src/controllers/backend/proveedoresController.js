const fs = require('fs');
const path = require('path');

const Proveedor = require('../../models/backend/proveedorModel');
const loadAppHtml = require('../../utils/loadAppHtml');

function ingresarProveedor(req, res) {
    const filePath = path.join(__dirname, '../../views/backend/partials/_proveedores_form_ingresar.html');

    try {
        const htmlContent = fs.readFileSync(filePath, 'utf8');
        loadAppHtml('backend', 'proveedores_ingresar', `${process.env.APP_NAME}: Módulo Proveedores`, htmlContent, res);
    } catch (err) {
        console.error('Error al leer el archivo HTML:', err);
    }
}

async function listarProveedores(req, res) {
    try {
        const proveedores = await Proveedor.listarProveedores();
        let html;
        if (proveedores.length > 0) {
            html = '<h3>Listado de Proveedores</h3>';
            html += '<table class="">' +
                        '<tr>' +
                        
                            '<th>Nombres</th>' +
                            '<th>Dirección</th>' +
                            '<th>Correo</th>' +
                            '<th>Teléfono</th>' +
                            '<th>Estado</th>' +
                            '<th>Contacto</th>' +
                        '</tr>';
            proveedores.forEach(proveedor => {
                html += `<tr>` +
                            `<td>${proveedor.id}</td>` +
                            `<td>${proveedor.nombres}</td>` +
                            `<td>${proveedor.direccion}</td>` +
                            `<td>${proveedor.correo}</td>` +
                            `<td>${proveedor.telefono}</td>` +
                            `<td>${proveedor.contacto}</td>` ;

                let textoEstado = (proveedor.estado === '1') ? 'Habilitado' : 'Deshabilitado';

                html += `<td>${textoEstado}</td>` +
                        `<td></td>` +
                        `<td></td>` +
                        `<td><a class="btn btn-primary" href='/sitio-admin/modulo-editar-proveedor/${proveedor.id}'>Editar</a></td>` +
                        `<td><a class="btn btn-primary" href='/sitio-admin/modulo-eliminar-proveedor/${proveedor.id}'>Eliminar</a></td>` +
                        `</tr>`;
            });
            html += '</table>';
        } else {
            html = '<h3>Sin Proveedores</h3>';
        }

        loadAppHtml('backend', 'proveedores_listar', `${process.env.APP_NAME}: Módulo Proveedores`, html, res);
    } catch (error) {
        console.error('Error al listar proveedores en el controlador:', error);
        res.status(500).send('Error al obtener la lista de proveedores');
    }
}

async function editarProveedor(req, res) {
    const proveedorid = req.params.id;
    const proveedor = new Proveedor(proveedorid);
    await proveedor.buscarProveedor();
    const filePath = path.join(__dirname, '../../views/backend/partials/_proveedor_form_editar.html');
    let options;
    if (proveedor.estado === '1') {
        options = `<option value="1" selected>Habilitado</option>` +
                   `<option value="0">Deshabilitado</option>`;
    } else {
        options = `<option value="1">Habilitado</option>` +
                  `<option value="0" selected>Deshabilitado</option>`;
    }
    try {
        let htmlContent = fs.readFileSync(filePath, 'utf8');
        htmlContent = htmlContent.replace('{{ id }}', proveedor.id);
        htmlContent = htmlContent.replace('{{ nombres }}', proveedor.nombres);
        htmlContent = htmlContent.replace('{{ direccion }}', proveedor.direccion);
        htmlContent = htmlContent.replace('{{ correo }}', proveedor.correo);
        htmlContent = htmlContent.replace('{{ telefono }}', proveedor.telefono);
        htmlContent = htmlContent.replace('{{ contacto }}', proveedor.contacto);
        htmlContent = htmlContent.replace('{{ options }}', options);
        loadAppHtml('backend', 'proveedor_editar', `${process.env.APP_NAME}: Módulo Proveedor`, htmlContent, res);
    } catch (error) {
        console.error('Error al leer el archivo HTML:', error);
    }
}

async function guardarEdicionProveedores(req, res) {
    let user = req.session.user;
    const { id, nombres, direccion, correo, telefono, contacto ,estado } = req.body;
    const proveedor = new Proveedor(id, nombres, direccion, correo, telefono, contacto ,estado);
    const respuesta = await proveedor.editarProveedor();
    if (respuesta) {
        req.flash('msg', 'Se ha editado');
        res.status(200).json({ message: `Proveedor ${nombres} editado correctamente.` });
    } else {
        req.flash('msg', 'No se ha podido editar.');
        res.status(404).json({ message: `No se pudo editar el proveedor ${nombres}.` });
    }
}

async function saveNewProveedor(req, res) {
    let user = req.session.user;
    const { id, nombres, direccion, correo, telefono, contacto ,estado } = req.body;
    const proveedor = new Proveedor(id,nombres, direccion, correo, telefono, contacto,estado);
    const respuesta = proveedor.agregarProveedor();
    if (respuesta) {
        req.flash('msg', 'Proveedor agregado');
        res.redirect('/sitio-admin/modulo-ingresar-proveedor');
    } else {
        req.flash('msg', 'No se ha podido agregar.');
        res.status(404).json({ message: `No se pudo agregar el proveedor ${nombres}.` });
    }
}

async function eliminarProveedor(req, res) {
    const proveedorid = req.params.id;
    const proveedor = new Proveedor(proveedorid);
    const respuesta = await proveedor.eliminarProveedor();
    if (respuesta) {
        req.flash('msg', 'Se ha eliminado');
        res.redirect('/sitio-admin/modulo-listar-proveedores'); // Corrige la redirección
    } else {
        req.flash('msg', 'No se ha podido eliminar.');
        res.status(404).json({ message: `No se pudo eliminar el proveedor ${proveedorid}.` });
    }
}

module.exports = { listarProveedores, ingresarProveedor, editarProveedor, guardarEdicionProveedores, saveNewProveedor, eliminarProveedor };
