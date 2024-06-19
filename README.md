# Proyecto Rodrigo Figueroa

Este es un proyecto web que sirve como plantilla. Fue desarrollado utilizando HTML, CSS y JavaScript.

## Descripción

Este proyecto es una plantilla de página web. No tiene ninguna funcionalidad específica.

## Tecnologías Utilizadas

- HTML
- CSS
- JavaScript

## Instalar la Base de Datos MySQL

En la raíz del proyecto se encuentra un directorio llamado `db`, donde está almacenada la base de datos de la plataforma con el nombre de archivo `db_node.sql`. Para configurarlo, accede a `phpMyAdmin` o una herramienta similar, crea una nueva base de datos y luego importa el archivo `db_node.sql` dentro de esta nueva base de datos.

## Iniciar Servidor Web Local de la Aplicación
    
El servidor web de la aplicación se inicia mediante `Node.js`. En este proyecto, `Apache` se utiliza exclusivamente para acceder a `phpMyAdmin`.

Una vez instaladas las dependencias y configuradas las variables de entorno, puedes iniciar el servidor web local ejecutando el siguiente comando desde la raíz del proyecto:

```
npm start
```

## Crear Primer Usuario

Nuestra aplicación requiere que se cree un usuario en la tabla `users` de la base de datos para realizar pruebas en el backend, como iniciar sesión, visualizar módulos y realizar operaciones CRUD.

En MySQL y/o MariaDB no existe una función integrada para cifrar contraseñas de la misma manera que lo hacemos en Node.js. Por esta razón, creamos un script que inserta el primer usuario en nuestra tabla `users`.

Este script se encuentra en la raíz del proyecto: `/`.

Podemos realizar este paso sin necesidad de iniciar el servidor web local de la aplicación.

Para crear el usuario, desde la raíz del proyecto:

```
node addPrimerUsuario.js
```

El `user` y el `password` del nuevo usuario para iniciar sesión se encuentran en el código fuente del archivo `addPrimerUsuario.js`. Debes cambiar las credenciales por unas seguras.

## Uso

Una vez que el servidor web local de la aplicación esté en funcionamiento, para acceder al sitio de los usuarios no autenticados (Sitio Frontend), simplemente ingresa la URL `http://localhost:3000` en tu navegador web.

Por defecto, la plataforma utiliza el puerto local `3000`. Si deseas modificar este puerto, puedes hacerlo directamente en el archivo `.env`. Recuerda que si cambias el puerto en el archivo `.env`, también debes actualizar la URL de acceso correspondientemente.

Para acceder al sitio del administrador, visita la siguiente URL: `http://localhost:3000/auth/login`. Aquí encontrarás una página de inicio de sesión donde podrás ingresar las credenciales del usuario que creaste.

La plataforma web, cuando está en ejecución, solo requiere el servicio de `MySQL` para conectarse a la base de datos. No es necesario tener iniciado `Apache`, ya que el servidor web de nuestra aplicación se ejecuta con `Node.js`. Sin embargo, puedes iniciar `Apache` si necesitas acceder a `phpMyAdmin` para gestionar la base de datos de manera visual.