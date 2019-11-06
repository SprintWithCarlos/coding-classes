

<img src="../img/swc.jpg" alt="SWC"
	title="SWC" width="100" height="100" style="border-radius: 50%" />

# Sprint with Carlos
Esta sección es un prerequisito para el curso de Fullstack JavaScript. Aunque consideres que tienes un buen nivel, es importante hacer un repaso de este temario, y tenerlo como material de consulta siempre. 
## [JavaScript.info]()

Los temas imprescindibles son: 
4.4 Object methods, "this"
5.5 Array Methods
6.3 Closures
8.1 Prototypal inheritance

Para complementar recomiendo:
* El libro [Eloquent JavaScript](https://eloquentjavascript.net/)
* El curso [Object-oriented programming with JavaScript](https://classroom.udacity.com/courses/ud711)
* El libro [Essential JavaScript Design Patterns](https://addyosmani.com/resources/essentialjsdesignpatterns/book/)

## Repaso
### Arrays
Estructura de datos que consiste en una colección *ordenada* de elementos. Los elementos pueden  ser de cualquier tipo: *string, number, array, object, function*. Siempre se utilizan los corchetes [ ] (*brackets*)


[Array en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array)

Crear un array
```javascript
//vacío
const miArreglo = [];
// con elementos
const lenguajes = [{
    id: 1


},'Python', 'Java', 'C', 'Golang'];
console.log(lenguajes)
// ['JavaScript','Python', 'Java', 'C', 'Golang']
```
Conocer longitud del array
```javascript
lenguajes.length
//  5
```
Acceder por índice
```javascript
lenguajes[0]
// 'JavaScript'
lenguajes[4]
// 'Golang'
```
Bucle
```javascript
lenguajes.forEach((index, item) =>{
    console.log(index, item)
})
/* 
JavaScript 0 
 Python 1 
 Java 2 
 C 3 
 Golang 4 */
```
Clonar un array
```javascript
const languages = [...lenguajes];
console.log(languages)
//  [ 'JavaScript', 'Python', 'Java', 'C', 'Golang' ]
```
Revisar el resto de los métodos de los arrays: push, pop, shift, unshift, indexOf, slice, splice, reverse, sort, concat, join, forEach, map, filter, reduce
<hr>

### Objetos
Estructura de datos conformada por una colección de pares de clave-valor asociados. Se representan siempre con llaves { } (*curly braces*). La clave siempre es una cadena de texto (*string*), el valor puede ser de cualquier tipo: *string, number, array, object, function*. Ambos están separados por dos puntos (:)


[Objeto en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Object)

Crear un objeto
```javascript
//usando notación literal
const miObjeto = {};
//usando el constructor
const miObjeto = new Object();
// con elementos
const coche = {
    color: 'rojo',
    año: '2019',
    fabricante: 'Tesla'
}
console.log(coche)
/* {
    color: 'rojo',
    año: '2019',
    fabricante: 'Tesla'
}*/
```
Acceder a las propiedades del objeto
```javascript
//con punto
coche.color
// 'rojo'

//con corchete
coche['fabricante']
// 'Tesla'
```
Añadiendo propiedades
```javascript
coche.modelo = 'Model 3'
console.log(coche)
/* {
    color: 'rojo',
    año: '2019',
    fabricante: 'Tesla',
    modelo: 'Model 3'
}*/
```
Cambiando las propiedades
```javascript
coche.color = 'azul'
console.log(coche.color)
// 'azul'
```
Clonar un array
```javascript
const languages = [...lenguajes];
console.log(languages)
//  [ 'JavaScript', 'Python', 'Java', 'C', 'Golang' ]
```