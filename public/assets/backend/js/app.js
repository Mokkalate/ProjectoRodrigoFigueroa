const formLogin = document.getElementById('formLogin');
const formUpdate = document.getElementById('formUpdate');
const formInsertar = document.getElementById('formInsertar');
const formInsertarProveedor = document.getElementById('formInsertarProveedor');
const formUpdateProveedor = document.getElementById('formUpdateProveedor');
const formEliminarProveedor = document.getElementById('formEliminarProveedor');
if(formLogin)
{
    formLogin.addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar el envío del formulario por defecto
        
        // Obtener los datos del formulario
        const formData = new FormData(this);
       
        // Convertir FormData a un objeto simple para depuración
        const plainFormData = Object.fromEntries(formData.entries());
        console.log('Datos del formulario:', plainFormData);
    
        // Enviar los datos al servidor
        fetch('/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(plainFormData) // Enviar los datos como JSON
        })
        .then(response => {
            if (response.redirected) {
                // Si la respuesta es una redirección, seguir la redirección
                window.location.href = response.url;
            } else if (response.ok) {
                return response.json(); // Si la respuesta es exitosa, convertir a JSON
            } else {
                return response.json().then(data => {
                    throw new Error(data.message);
                });
            }
        })
        .then(data => {
            if (data) { // Asegurarse de que data no sea null
                // Manejar la respuesta del servidor
                console.log('Respuesta del servidor:', data);
    
                // Mostrar mensaje de error, si existe
                if (data.message) {
                    document.getElementById('mensajeError').textContent = data.message;
                }
            }
        })
        .catch(error => {
            console.error('Error:', error); // Capturar y manejar errores generales
            // Mostrar mensaje de error general en tu página HTML
            if (error.message) {
                document.getElementById('mensajeError').textContent = error.message;
            }
        });
    });
}

if(formInsertar)
{
    formInsertar.addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar el envío del formulario por defecto

        // Obtener los datos del formulario
        const formData = new FormData(this);
       
        // Convertir FormData a un objeto simple para depuración
        const plainFormData = Object.fromEntries(formData.entries());
        console.log('Datos del formulario:', plainFormData);
        // Enviar los datos al servidor
        fetch('/sitio-admin/modulo-ingresar-cliente', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(plainFormData) // Enviar los datos como JSON
        })
        .then(response => {
            if (response.redirected) {
                // Si la respuesta es una redirección, seguir la redirección
                window.location.href = response.url;
            } else if (response.ok) {
                return response.json(); // Si la respuesta es exitosa, convertir a JSON
            } else {
                return response.json().then(data => {
                    throw new Error(data.message);
                });
            }
        })
        .then(data => {
            if (data) { // Asegurarse de que data no sea null
                // Manejar la respuesta del servidor
                console.log('Respuesta del servidor:', data);
    
                // Mostrar mensaje de error, si existe
                if (data.message) {
                    document.getElementById('mensajeError').textContent = data.message;
                }
            }
        })
        .catch(error => {
            console.error('Error:', error); // Capturar y manejar errores generales
            // Mostrar mensaje de error general en tu página HTML
            if (error.message) {
                document.getElementById('mensajeError').textContent = error.message;
            }
        });
    });
}
if(formInsertarProveedor)
    {
        formInsertarProveedor.addEventListener('submit', function(event) {
            event.preventDefault(); // Evitar el envío del formulario por defecto
    
            // Obtener los datos del formulario
            const formData = new FormData(this);
           
            // Convertir FormData a un objeto simple para depuración
            const plainFormData = Object.fromEntries(formData.entries());
            console.log('Datos del formulario:', plainFormData);
            // Enviar los datos al servidor
            fetch('/sitio-admin/modulo-ingresar-proveedor', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(plainFormData) // Enviar los datos como JSON
            })
            .then(response => {
                if (response.redirected) {
                    // Si la respuesta es una redirección, seguir la redirección
                    window.location.href = response.url;
                } else if (response.ok) {
                    return response.json(); // Si la respuesta es exitosa, convertir a JSON
                } else {
                    return response.json().then(data => {
                        throw new Error(data.message);
                    });
                }
            })
            .then(data => {
                if (data) { // Asegurarse de que data no sea null
                    // Manejar la respuesta del servidor
                    console.log('Respuesta del servidor:', data);
        
                    // Mostrar mensaje de error, si existe
                    if (data.message) {
                        document.getElementById('mensajeError').textContent = data.message;
                    }
                }
            })
            .catch(error => {
                console.error('Error:', error); // Capturar y manejar errores generales
                // Mostrar mensaje de error general en tu página HTML
                if (error.message) {
                    document.getElementById('mensajeError').textContent = error.message;
                }
            });
        });
    }
if(formUpdate)
    {
        formUpdate.addEventListener('submit', function(event) {
            event.preventDefault(); // Evitar el envío del formulario por defecto
    
            // Obtener los datos del formulario
            const formData = new FormData(this);
           
            // Convertir FormData a un objeto simple para depuración
            const plainFormData = Object.fromEntries(formData.entries());
            console.log('Datos del formulario:', plainFormData);
            // Enviar los datos al servidor
            fetch('/sitio-admin/modulo-editar-cliente', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(plainFormData) // Enviar los datos como JSON
            })
            .then(response => {
                if (response.redirected) {
                    // Si la respuesta es una redirección, seguir la redirección
                    window.location.href = response.url;
                } else if (response.ok) {
                    return response.json(); // Si la respuesta es exitosa, convertir a JSON
                } else {
                    return response.json().then(data => {
                        throw new Error(data.message);
                    });
                }
            })
            .then(data => {
                if (data) { // Asegurarse de que data no sea null
                    // Manejar la respuesta del servidor
                    console.log('Respuesta del servidor:', data);
        
                    // Mostrar mensaje de error, si existe
                    if (data.message) {
                        document.getElementById('mensajeError').textContent = data.message;
                    }
                }
            })
            .catch(error => {
                console.error('Error:', error); // Capturar y manejar errores generales
                // Mostrar mensaje de error general en tu página HTML
                if (error.message) {
                    document.getElementById('mensajeError').textContent = error.message;
                }
            });
        });
    }
    
    if(formInsertarProveedor)
        {
            formInsertarProveedor.addEventListener('submit', function(event) {
                event.preventDefault(); // Evitar el envío del formulario por defecto
        
                // Obtener los datos del formulario
                const formData = new FormData(this);
               
                // Convertir FormData a un objeto simple para depuración
                const plainFormData = Object.fromEntries(formData.entries());
                console.log('Datos del formulario:', plainFormData);
                // Enviar los datos al servidor
                fetch('/sitio-admin/modulo-ingresar-Proveedor', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(plainFormData) // Enviar los datos como JSON
                })
                .then(response => {
                    if (response.redirected) {
                        // Si la respuesta es una redirección, seguir la redirección
                        window.location.href = response.url;
                    } else if (response.ok) {
                        return response.json(); // Si la respuesta es exitosa, convertir a JSON
                    } else {
                        return response.json().then(data => {
                            throw new Error(data.message);
                        });
                    }
                })
                .then(data => {
                    if (data) { // Asegurarse de que data no sea null
                        // Manejar la respuesta del servidor
                        console.log('Respuesta del servidor:', data);
            
                        // Mostrar mensaje de error, si existe
                        if (data.message) {
                            document.getElementById('mensajeError').textContent = data.message;
                        }
                    }
                })
                .catch(error => {
                    console.error('Error:', error); // Capturar y manejar errores generales
                    // Mostrar mensaje de error general en tu página HTML
                    if (error.message) {
                        document.getElementById('mensajeError').textContent = error.message;
                    }
                });
            });
        }

        if(formUpdateProveedor)
            {
                formUpdateProveedor.addEventListener('submit', function(event) {
                    event.preventDefault(); // Evitar el envío del formulario por defecto
            
                    // Obtener los datos del formulario
                    const formData = new FormData(this);
                   
                    // Convertir FormData a un objeto simple para depuración
                    const plainFormData = Object.fromEntries(formData.entries());
                    console.log('Datos del formulario:', plainFormData);
                    // Enviar los datos al servidor
                    fetch('/sitio-admin/modulo-editar-proveedores', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(plainFormData) // Enviar los datos como JSON
                    })
                    .then(response => {
                        if (response.redirected) {
                            // Si la respuesta es una redirección, seguir la redirección
                            window.location.href = response.url;
                        } else if (response.ok) {
                            return response.json(); // Si la respuesta es exitosa, convertir a JSON
                        } else {
                            return response.json().then(data => {
                                throw new Error(data.message);
                            });
                        }
                    })
                    .then(data => {
                        if (data) { // Asegurarse de que data no sea null
                            // Manejar la respuesta del servidor
                            console.log('Respuesta del servidor:', data);
                
                            // Mostrar mensaje de error, si existe
                            if (data.message) {
                                document.getElementById('mensajeError').textContent = data.message;
                            }
                        }
                    })
                    .catch(error => {
                        console.error('Error:', error); // Capturar y manejar errores generales
                        // Mostrar mensaje de error general en tu página HTML
                        if (error.message) {
                            document.getElementById('mensajeError').textContent = error.message;
                        }
                    });
                });
            }
            if(formEliminarProveedor)
            {
                formEliminarProveedor.addEventListener('submit', function(event) {
                    event.preventDefault(); // Evitar el envío del formulario por defecto
            
                    // Obtener los datos del formulario
                    const formData = new FormData(this);
                   
                    // Convertir FormData a un objeto simple para depuración
                    const plainFormData = Object.fromEntries(formData.entries());
                    console.log('Datos del formulario:', plainFormData);
                    // Enviar los datos al servidor
                    fetch('/sitio-admin/modulo-eliminar-proveedor', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(plainFormData) // Enviar los datos como JSON
                    })
                    .then(response => {
                        if (response.redirected) {
                            // Si la respuesta es una redirección, seguir la redirección
                            window.location.href = response.url;
                        } else if (response.ok) {
                            return response.json(); // Si la respuesta es exitosa, convertir a JSON
                        } else {
                            return response.json().then(data => {
                                throw new Error(data.message);
                            });
                        }
                    })
                    .then(data => {
                        if (data) { // Asegurarse de que data no sea null
                            // Manejar la respuesta del servidor
                            console.log('Respuesta del servidor:', data);
                
                            // Mostrar mensaje de error, si existe
                            if (data.message) {
                                document.getElementById('mensajeError').textContent = data.message;
                            }
                        }
                    })
                    .catch(error => {
                        console.error('Error:', error); // Capturar y manejar errores generales
                        // Mostrar mensaje de error general en tu página HTML
                        if (error.message) {
                            document.getElementById('mensajeError').textContent = error.message;
                        }
                    });
                });
            }
            