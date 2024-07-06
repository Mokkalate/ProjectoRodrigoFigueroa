const DataBase = require('../conexionModel');

class Proveedor {
    constructor(id, nombres, direccion, correo, telefono, estado) {
        this.id = id;
        this.nombres = nombres;
        this.direccion = direccion;
        this.correo = correo;
        this.telefono = telefono;
        this.estado = estado;
    }

    async agregarproveedor() {
        const db = DataBase.getInstance(); // Obtiene una instancia de la conexión a la base de datos
        try {
            // Ejemplo de consulta SQL para insertar un nuevo cliente
            const query = 'INSERT INTO proveedores ( nombres, direccion, correo, telefono, estado) VALUES ( ?, ?, ?, ?, ?)';
            const params = [this.nombres, this.direccion, this.correo, this.telefono, this.estado];
            const resultado = await db.ejecutarQuery(query, params);
            console.log('Proovedor agregado correctamente:', resultado);
            return resultado;
        } catch (error) {
            console.error('Error al agregar al proveedor:', error);
            throw error;
        }
    }
    async eliminarProveedor() {
        const db = DataBase.getInstance(); // Obtiene una instancia de la conexión a la base de datos
        try {
            const query = 'DELETE FROM proveedores WHERE id=?';
            const resultado = await db.ejecutarQuery(query, [this.id]);
            if (resultado.affectedRows > 0) {
                console.log('Proveedor eliminado con éxito');
                return true;
            } else {
                console.log('No se encontró el Proveedor con el ID especificado');
                return false;
            }
        } catch (error) {
            console.error('Error al eliminar el Proveedor:', error);
            throw error;
        }
    }
    
    static async listarProveedores() {
        const db = DataBase.getInstance(); // Obtiene una instancia de la conexión a la base de datos
        try {
            // Ejemplo de consulta SQL para listar todos los proveedores
            const query = 'SELECT * FROM Proveedores';
            const proveedor = await db.ejecutarQuery(query);
            console.log('Proveedores encontrados:', proveedor);
            return proveedor;
        } catch (error) {
            console.error('Error al listar Proveedores:', error);
            throw error;
        }
    }

    async buscarProveedor()
    {
        const db = DataBase.getInstance(); // Obtiene una instancia de la conexión a la base de datos
        try {
            const query = 'SELECT * FROM proveedores WHERE id=?';
            const proveedor = await db.ejecutarQuery(query,[this.id]);
            console.log('Proveedore encontrado:', proveedor);
            // Asignar los datos del cliente encontrado a los atributos del objeto
            if (proveedor.length > 0) {
                const { id, nombres, direccion, correo, telefono, contacto ,estado } = proveedor[0];
                this.id = id;
                this.nombres = nombres;
                this.direccion = direccion;
                this.correo = correo;
                this.telefono = telefono;
                this.contacto = contacto;
                this.estado = estado;
            }
            return proveedor;
        } catch (error) {
            console.error('Error al buscar el proveedor:', error);
            throw error;
        }
    }

    async editarProveedor() {
        const db = DataBase.getInstance();
        try {
            const query = 'UPDATE proveedores SET nombres=?, direccion=?, correo=?, telefono=?, estado=?, contacto=? WHERE id=?';
            const params = [
                this.nombres, 
                this.direccion, 
                this.correo, 
                this.telefono, 
                this.estado, 
                this.contacto,
                this.id
            ];
            
            const resultado = await db.ejecutarQuery(query, params);
    
            // Verificar si se modificó el registro
            if (resultado.affectedRows > 0) {
                console.log('proveedor actualizado con éxito');
                return true;
            } else {
                console.log('No se encontró el cliente con el ID especificado o no hubo cambios en los datos');
                return false;
            }
        } catch (error) {
            console.error('Error al actualizar el cliente:', error);
            throw error;
        }
    }
    
}

module.exports = Proveedor