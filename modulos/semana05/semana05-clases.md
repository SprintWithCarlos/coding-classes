
<img src="../img/swc.jpg" width="100" height="100" style="border-radius: 50%" />

# Sprint with Carlos

## Quinta Semana
![base](/modulos/img/swc-fullstack-04.png)
### Punto previo: Repaso
Hasta los momentos hemos visto:
- Qué es un servidor
- HTTP
- Patrón MVC
- REST API
- GraphQL 

Hemos aprendido cómo proteger las rutas con autenticación y autorización, como cargar archivos  y como testar con Postman. Estos conocimientos son fundamentales para abordar la siguiente etapa en la cual le daremos persistencia a los datos por medio de bases de datos.
### Primera clase
- [Bases de datos SQL](#bases-de-datos-sql)
### Segunda clase
- [Bases de datos: MongoDB](#bases-de-datos-mongodb)
### Tercera clase
- [Fundamentos Frameworks](#fundamentos-frameworks)
#### Bases de datos SQL
Para demostrar la implementación de los verbos HTTP para manipular data con SQL he creado el archivo crudHTTPSQL.js. Para ver el funcionamiento en tiempo real:
```javascript
nodemon crudHTTPSQL.js 
```
utilizando el archivo de Postman REST API SQL.postman_collection.json para probar el funcionamiento de cada uno de los endpoints. Deberás inicializar tu servidor MySQL para funcione el ejemplo. Con el archivo de testing en Postman REST API SQL.postman_test_run podrás ejecutar una suite de pruebas de forma automática para poder verificar que todos los endpoint funcionan correctamente.
#### Bases de datos: MongoDB
Instrucciones para instalar MongoDB Community Edition
[En Mac](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/)
```bash
brew tap mongodb/brew
brew install mongodb-community@4.2
mongod --config /usr/local/etc/mongod.conf

```
[En Windows](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/)
[En Linux](https://docs.mongodb.com/manual/administration/install-on-linux/)
De igual manera, para demostrar la implementación de los verbos HTTP para manipular data con MongoDB he creado el archivo crudHTTPMongo.js. Para ver el funcionamiento en tiempo real:
```javascript
nodemon crudHTTPMongo.js 
```
utilizando el archivo de Postman REST API Mongo.postman_collection.json para probar el funcionamiento de cada uno de los endpoints. Deberás tener activado tu servidor MongoDB para que el ejemplo funcione.

#### Fundamentos Frameworks
**Autor: Carlos Marchena @ 2019**