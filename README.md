# PROYECTO API-PRECIO-LUZ

## DESCRIPCIÓN

**Funcionamiento del Proyecto**  
Este proyecto es una API que gestiona los precios de la electricidad. La aplicación realiza las siguientes funciones:

1. **Obtención de Precios Externos**:  
   La API se conecta a una fuente externa para obtener los precios de la electricidad.
   
2. **Almacenamiento en Base de Datos**:  
   Una vez que los precios son obtenidos, se procesan y almacenan en una base de datos SQLite para su consulta posterior.

3. **Consultas a la Base de Datos**:  
   La API permite realizar consultas para obtener los precios almacenados de varias formas:
   - Obtener todos los precios.
   - Consultar los precios de un día específico.
   - Consultar los precios de una hora específica.
   - Consultar precios entre un rango de fechas y horas.

4. **Servidor Web**:  
   El servidor ejecuta la aplicación en el puerto especificado y expone los endpoints para interactuar con los precios de la electricidad.

## TECNOLOGÍAS UTILIZADAS

- **Express**: Framework para construir la API.
- **SQLite3**: Base de datos utilizada para almacenar los precios de la luz.
- **dotenv**: Para la gestión de variables de entorno.
- **cors**: Para habilitar el acceso a la API desde otros dominios.
- **Chart.js**: Para crear gráficos interactivos en el frontend.

## BACKEND

El backend de este proyecto está desarrollado con **Express**, y tiene como objetivo manejar las consultas de los precios de la luz. Las principales funciones son:

1. **Obtención de Datos**:  
   Se realiza un *fetch* a una fuente externa para obtener los precios de la luz.

2. **Almacenamiento en la Base de Datos**:  
   Los datos obtenidos se guardan en una base de datos **SQLite3** para consultas posteriores.

3. **Endpoints Expuestos**:  
   - **GET /api/preciosLuz**: Devuelve toda la información de la base de datos.
   - **GET /api/precios-luz/horas**: Devuelve los precios de la luz por hora.
   - **GET /api/precios-luz/dias**: Devuelve los precios de la luz por día.
   - **GET /api/preciosLuz/precios/:fechaInicio/:fechaFin/:hora**: Devuelve información filtrada según fecha y hora.

## FRONTEND

El frontend proporciona una interfaz interactiva para que los usuarios puedan consultar los precios de la luz. Las principales características incluyen:

### 1. **Página de Login y Registro**  
   - Si el usuario no está registrado, puede registrarse con:
     - `username` (nombre de usuario)
     - `password` (confirmación de contraseña)  
   - Si el usuario está registrado, puede acceder a la **página de login** para autenticarse.

### 2. **Autenticación y Seguridad**  
   - Las credenciales se validan, y la sesión se guarda de forma encriptada en **localStorage**.  
   - Los datos de sesión se eliminan al cerrar sesión.

### 3. **Página Principal**  
   Tras el inicio de sesión, el usuario accede a la página principal, que incluye:
   - **Navbar**: Con logo, botones de navegación (Luz y Tiempo) y un botón para cerrar sesión.
   - **Footer**: Con enlaces a GitHub, LinkedIn, y correo de contacto.
   - **Formulario de Filtros**: Permite seleccionar fecha, hora o rangos para consultar los precios de la luz.
   - **Gráfico Interactivo**: Muestra los precios filtrados en tiempo real.

### 4. **Consulta del Precio de la Luz**  
   - Al hacer clic en el botón "Ver Gráfico", se muestra un gráfico interactivo con los precios de la electricidad.  
   - Los datos del gráfico se obtienen dinámicamente de la API y se visualizan utilizando **Chart.js**.

## Ejecución del Proyecto con Docker

Puedes encontrar la explicación completa sobre cómo ejecutar este proyecto con Docker en el siguiente repositorio:

[Docker-Proyecto-API-Luz](https://github.com/zelh392/Docker-Proyecto-API-Luz)

En el repositorio encontrarás instrucciones detalladas sobre cómo clonar el proyecto, levantar los contenedores con Docker Compose y todo lo necesario para que el proyecto funcione sin problemas.

¡Sigue los pasos allí indicados y empieza a usar el proyecto de manera rápida y sencilla!
