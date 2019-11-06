
<img src="../img/swc.jpg" width="100" height="100" style="border-radius: 50%" />

# Sprint with Carlos

## Tercera Semana
![base](/modulos/img/swc-fullstack-03.png)
### Primera clase
- RESTful API: Conceptos generales, Postman
### Segunda clase
- Auth/Archivos
### Tercera clase
- Testing: API Postman

#### Primera clase: RESTful API: Conceptos generales, Postman
En el capitulo anterior hemos visto el patrón Modelo Vista Controlador (MVC) como un patrón de diseño donde nuestro servidor, a la petición de un cliente a una ruta específica, responde con un controlador (ciclo petición-respuesta). Este controlador es una función que genera dicha respuesta combinando una plantilla con los datos y la lógica que van a "pintar" (renderizar) dinámicamente esta vista con el modelo en el navegador del cliente.
![MVC](/modulos/semana02/img/mvc.png)
Este patrón sigue siendo muy utilizado aunque en los últimos años hemos visto un incremento en el uso de otro patron: REstful API. Tal como lo explica [MDN](https://developer.mozilla.org/es/docs/Glossary/REST)
>El término "Transferencia de Estado Representacional" (REST) representa un conjunto de características de diseño de arquitecturas software que aportan confiabilidad, eficiencia y escalibilidad a los sistemas distribuidos. Un sistema es llamado RESTful cuando se ajusta a estas características.
Una RESTful API es útil en aquellos casos en los cuales queremos crear tanto una app web como una app móvil, ya que las respuestas del servidor, a diferencia del patrón MVC donde la vista y los datos están acoplados, sólo enviarán datos en la RESTful API.

**Explicación del código** 
Como paso previo al desarrollo de la RESTful API, hemos demostrado primero cómo crear funciones en javascript que recreen las funcionalidades básicas de una base de datos: Alta, Baja, Modificar, Leer (ABML), también llamadas CRUD, por sus siglas en inglés (Create, Read, Update, Delete).
Estas funciones han sido creadas en el archivo [crudJS.js](/modulos/semana03/crudJS.js).
He creado este archivo sin dependencias externas y sólo una propia: los datos que utilizarán las funciones y que simulan una base de datos. El nombre del archivo es "data.js". 
La constante data es un objeto con dos propiedades: books y users. A su vez el valor de cada propiedad es un arreglo (array) los cuales podemos manipular con los métodos nativos de JS correspondientes a los arreglos. El autocompletado de Visual Studio Code nos indica los métodos que tenemos a nuestra disposición. En caso de duda consultar en MDN `Array.prototype`. 
Se sugiere tener abierto en paralelo el archivo crudJS.js para seguir el detalle de la explicación.

*1. Importación de los datos*

*2. Almacenamiento de los libros en variable "books":*
Lo que se almacena es el valor de la propiedad "books", el cual es un arreglo (array), tal como se puede evidenciar en el archivo "data.js"

*3. Creación de función "readList"*
```javascript
//Sintaxis ECMAScript 5
function readList(arr){
     console.log(arr)
}
//Sintaxis ECMAScript 6
const readList = (arr) => console.log(arr);
```
Esta función básicamente toma el arreglo que está recibiendo como parámetro y lo imprime por la consola

*4. Llamada de la función con el arreglo 'book' como parámetro*

*5. Creación y llamada de la función readDetail*

```javascript
//Sintaxis ECMAScript 5
function readDetail(id, arr){
  var i = id - 1;
  return console.log(obj[i]);
};
readDetail(2, books);
//Sintaxis ECMAScript 6
const readDetail = (id, arr) => {
  const i = id - 1;
  return console.log(obj[i]);
};
readDetail(2, books);
```
En este caso los argumentos son la id del elemento concreto que queremos imprimir por pantalla y el arreglo al cual pertenece dicho elemento. Al crearse el archivo "data" decidí que cada libro tuviera una id que `books.length +1`, por eso aquí para saber cuál es el índice de ese elemento dentro del array computamos `id - 1` y lo guardamos en la variable `i` 

*6. Creación y llamada de función createBook*

```javascript
//Sintaxis ECMAScript 5
function createBook(title, author, year, arr){
  var book = {
    id: arr.length + 1,
    title: title,
    author: author,
    year: year,
  };
  arr.push(book);
  return console.log(arr);
};
//Sintaxis ECMAScript 6
const createBook = (title, author, year, arr) => {
  const book = {
    id: arr.length + 1,
    title,
    author,
    year,
  };
  arr.push(book);
  return console.log(arr);
};
```
En este caso creamos un nuevo libro, utilizando las mismas propiedades que tienen los libros en el archivo 'data.js' y lo añadimos al final del arreglo, con el método 'push'. Como se observa, con ECMAScript 6 no hace falta repetir propiedad y valor si son homónimos. Por eso no hace falta escribir `table: table` y los consiguientes casos.

*7. Creación y llamada de la función updateBook*
En este caso debemos modificar los valores del libro que concretamente nos indique el usuario como parámetro al llamar la función. 
```javascript
//Sintaxis ECMAScript 5
function updateBook(id, title, author, year, arr){
  var updatedBook = arr.find((item) => item.id === id);
  updatedBook.title = title;
  updatedBook.author = author;
  updatedBook.year = year;
  return console.log(arr);
};
//Sintaxis ECMAScript 6
const updateBook = (id, title, author, year, arr) => {
  const updatedBook = arr.find((item) => item.id === id);
  updatedBook.title = title;
  updatedBook.author = author;
  updatedBook.year = year;
  return console.log(arr);
};
```
Básicamente estamos sobreescribiendo los valores que tiene cada propiedad de dicho libro con los valores que ha pasado el usuario como parámetros.

*8. Creación y llamada de la función deleteBook*
```javascript
//Sintaxis ECMAScript 5
function deleteBook(id, arr){
  var index = arr.indexOf(id);
  arr.splice(index, 1);
  return console.log(arr);
};
//Sintaxis ECMAScript 6
const deleteBook = (id, arr) => {
  const index = arr.indexOf(id);
  arr.splice(index, 1);
  return console.log(arr);
};
```
Con estos 8 pasos hemos creado funciones que replican un CRUD. Un primer acercamiento sencillo para entender los conceptos de lo que haremos a continuación. Es un ejercicio de laboratorio, ¡jamás lo uses en producción! Para ganar en simplicidad el ejercicio pierde en otros aspectos como la persistencia y la gestión de errores. Todos estos aspectos los veremos con detalle a medida que vayamos avanzando con el resto de las clases.

***Actividad***
Desde la terminal ejecuta el comando `nodemon crudJS.js` en la carpeta 'semana03'.
Ubica en el código los siguientes comentarios
```javascript 
// a. readBooks
// b. readDetails
// c. createBook
// d. updateBook
// e. deleteBook
```
Selecciona la línea debajo y elimina el comentario. La línea tiene los símbolos `//` al inicio. Con VSC puedes hacerlo rápidamente seleccionando el texto y utilizando el comando Editar>Alternar comentario de línea. Haz el cambio y guarda el archivo. Al guardar el servidor se reiniciará automáticamente y podrás ver por la consola el resultado.
Una vez veas el resultado vuelve a comentar las funciones, dejándolo todo como antes. Esta acción deberás realizarla cinco(5) veces, una por acción.
**Creación de la RESTful API**
Las funciones descritas anteriormente son la base de lo que veremos a continuación. La diferencia está en que en este caso las funciones se ejecutarán como respuesta a la petición por una ruta específica, con los datos que lleguen en la propia petición. He decidido dejar todo el programa en un solo archivo para facilitar su explicación, algo que no deberás hacer en producción. Es un ejercicio con objetivo pedagócico. El archivo que estaremos revisando es 'crudRestAPI.js'. Puedes ir a la terminal y ejecutar el comando `nodemon crudRestAPI.js`. Para probar las funciones puedes utilizar tanto Postman como Insomnia. Son programas que facilitan el trabajo por tener una interfaz gráfica, mientras te familiarizas con la terminal.
Como punto previo revisemos esta función:
```javascript
//Sintaxis ECMAScript 5
app.get('/books', function (req, res){
    res.json(books)
}
//Sintaxis ECMAScript 6
app.get('/books', (req, res) => {
    res.json(books)
}
```
Del patrón MVC recordamos que el método preferido en la respuesta era 'render', donde juntábamos vista y modelo. Ahora el método preferido será 'json', de tal manera que el cuerpo de la respuesta en este caso tendrá sólo datos. La renderización dependerá del front.
Te recomiendo que vayas al archivo para que veas la explicación línea por línea por medio de comentarios.
***Dependencias***
dotenv: nos permite importar variables que están guardadas en el archivo '.env' que está guardado en la raíz de este directorio. Son variables de entorno, son privadas, se ignoran en el repositorio git y sólo funcionan en mi entorno de desarrollo. Las variables de entorno se reconocen porque empiezan por 'process.env', siempre se debe ofrecer una alternativa si esas variables no existen con el operador "O" ( || ).
morgan: Nos envía información sobre las peticiones y su estado por la consola.
multer: Nos permite subir fotos al servidor. Toda la configuración tiene como objetivo que podamos utilizar el método 'upload' de multer para poder subir las fotos al servidor. En este caso sólo lo usamos en la creación de cada libro. 
bcrypt: Nos permite encriptar el password del usuario antes de guardarlo en nuestra base de datos.
jsonwebtoken: genera una token dentro de la cual se guarda de forma encriptada la información que queramos. Es necesaria para verificar si el usuario tiene los permisos necesarios para recibir la respuesta a una petición realizada a una ruta protegida.
El programa puede ser leído en los siguientes bloques:
1. Dependencias
2. Variables de Entorno
3. Configuración de multer
4. Middlewares
5. Autenticación y autorización (Auth)
6. Funciones CRUD: 


| Recurso  | Verbo HTTP  | CRUD   | Ruta   |
|---|---|---|---|
|   users| POST   | Create   | /signup  |
|   users| GET   | Read (All)   | */users  |
|  books |  POST | Create  | /books   |
|books | GET  | Read (All)   | /books   |
|  books | GET   | Read (One)  | /books/:id   |
|  books | UPDATE  | PUT  | /books/:id   |
|  books | DELETE  | DELETE  | /books/:id  |

La ruta '/users' está protegida, sólo pueden visualizarla los administradores. 
Adicionalmente a 'json' hemos utilizado 'status' para notificar al usuario el estado de su petición. 
He creado también un manejador de errores tanto para las peticiones cuyo estado es 404 y para y para el resto que no esté explícitamente regulado en las funciones.

**Actividad**
- Revisa cada uno de los bloques y sus comentarios
- Prueba las distintas rutas con Postman o Insomnia. En el repositorio tienes un archivo de Postman con el que puedes verificar todas las rutas. 'restapi.postman_collection.json'
- Si ejecutas el siguiente comando en la terminal 'node apitest.js', todos los tests de Postman se ejecutarán y podrás ver si todo está bien.

**Autor: Carlos Marchena @ 2019**