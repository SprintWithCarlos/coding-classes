# Expresiones Regulares

##Clase 1

###¿Qué son expresiones regulares?

Son patrones utilizados para encontrar una determinada combinación de caracteres dentro de una cadena de texto. Pueden utilizarse tanto en programación como en hojas de cálculo, como veremos en un ejemplo.
En esta tutoría veremos concretamente su uso con JavaScript, lenguaje en el que las expresiones regulares son objetos.
|Objeto|Métodos disponibles|
|---|---|
|RegExp| exec, test|
| String| match, replace, search, split |

###¿Para qué?

- Validaciones: Determinar si una cadena de caracteres cumple con unas condiciones específicas. Por ejemplo, si un input de tipo email recibe un formato válido de correo
- Extracciones: tomar un fragmento de la cadena de caracteres y reutilizarlo con otro fin
- Reemplazar: ubicar un fragmento de la cadena que cumpla con unas condiciones y sustituirlo por otro

###¿Cómo?
Se pueden crear de dos maneras:

1. Representación literal
   `let expresiónLiteral = /abc/`
2. Constructor
   `let expresionConstructor = new RegExp("abc")`
Ejemplos en regexp.js y [RegexOne](https://regexone.com/lesson/introduction_abcs)

**Banderas**

| letra | descripción                                 |
| ----- | ------------------------------------------- |
| g     | Búsqueda global                             |
| i     | No diferencia entre mayúsculas y minúsculas |
| m     | Búsqueda en multilínea                      |
##Clase 2
Ejemplos en /katas y /freeCodeCamp
##Clase 3 Introducción
##Clase 4 Git
##Recursos
[Expresiones Regulares - MDN
](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions)
[Programación guiado por pruebas - TDD](https://es.wikipedia.org/wiki/Desarrollo_guiado_por_pruebas)