# Proyecto CRUD con API de MongoDB y Frontend en React

Este repositorio ofrece una solución completa para gestionar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) utilizando una API construida con Node.js y MongoDB, y un frontend desarrollado en React. 

## API de Node.js y MongoDB

La API se encarga de interactuar con una base de datos MongoDB para manejar datos. Utiliza `Express` para gestionar las rutas y `mongoose` para facilitar la conexión con MongoDB. Las principales funcionalidades incluyen:
- **Crear**: Endpoint para añadir nuevos documentos a la base de datos.
- **Leer**: Endpoint para obtener documentos desde la base de datos.
- **Actualizar**: Endpoint para modificar documentos existentes.
- **Eliminar**: Endpoint para borrar documentos de la base de datos.
- **Validación de Datos**: Middleware para validar datos antes de almacenarlos.

## Frontend en React

El frontend en React proporciona una interfaz de usuario interactiva que permite realizar operaciones CRUD a través de la API. Las funcionalidades incluyen:
- **Formulario de Crear**: Para ingresar nuevos datos.
- **Lista de Documentos**: Muestra los documentos almacenados.
- **Edición de Documentos**: Permite actualizar datos existentes.
- **Eliminación de Documentos**: Para eliminar documentos específicos.

## Configuración

### API

1. **Instalación**:
   ```bash
   npm install
