const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000;

// Configuración de la conexión a la base de datos
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db_node'
});

// Conectar a la base de datos
connection.connect((error) => {
    if (error) {
        console.error('Error al conectar a la base de datos:', error);
        return;
    }
    console.log('Conexión exitosa a la base de datos MySQL.');
});

// Ruta para obtener todas las imágenes de animales
app.get('/api/animales', (req, res) => {
    const query = 'SELECT * FROM animales';
    connection.query(query, (error, results) => {
        if (error) {
            console.error('Error al obtener los animales:', error);
            res.status(500).json({ error: 'Error al obtener los animales' });
            return;
        }
        res.json(results);
    });
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
