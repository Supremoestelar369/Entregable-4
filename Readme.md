Entregable-4 ACADEMLO

Es una api de blogs el cual esta en la fase de CRUD de usuarios

this project is a fork from https://github.com/SheykoWk/users-base

Proyecto Rutas Protegidas
En este caso deberas iniciar session para obtener un token generado por la API, el cual debes guardar y enviar en el header de tu peticion HTTP para poder editar o eliminar usuarios

Clona este repositorio
git clone https://github.com/ivanhack34/users-base-entregable-4
Abre tu editor de codigo y descarga las dependencias
    npm install
Con Thunder Client(extencion de VSC) o Postman genera las siguientes peticiones
Metodo POST:
para crear nuevos usuarios, envia un JSON con todos los campos requeridos
localhost:9000/api/v1/users

prueba iniciar session, debes enviar el correo y contraseña del usuario
si las credenciales estan correctas te generara un token
localhost:9000/api/v1/auth/login

Metodo PATCH:
Trata de editar uno de los usuarios que creaste, adjunta en el body los datos modificados en formato JSON
recuerda enviar en el HEADER HTTP la propiedad {Authorization: JWT tu_token}
localhost:9000/api/v1/users/userId

Metodo DELETE:
Intenta eliminar un usuario
recuerda enviar en el HEADER HTTP la propiedad {Authorization: JWT tu_token}
localhost:9000/api/v1/users/userId

Rutas protegidas adicionales:
Metodo POST:
Visualiza datos del usuario logeado
recuerda enviar en el HEADER HTTP la propiedad {Authorization: JWT tu_token}
localhost:9000/api/v1/users/me

