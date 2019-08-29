/* eslint-disable no-unused-expressions */
/* eslint-disable max-len */
/* Clase 1: En primer lugar hemos creado tres variables "palabra", "frase" y "texto" para trabajar con ellas y probar las distintas funciones de expresiones regulares.  */
const palabra = 'programación';
const frase = 'No hay nada mejor que la programación';
const texto = `Éste es un libro que habla sobre cómo darle instrucciones a los computadores. Los computadores hoy son casi tan comunes como los desatornilladores, pero son un poco más complejos, y hacer que hagan lo que quieres que hagan no es siempre fácil.

Si la tarea que tienes para tu computador es común y clara, como mostrarte tus correos electrónicos o actuar como una calculadora, puedes abrir la aplicación adecuada y realizar la tarea. Pero para las tareas únicas o aún no definidas probablemente no exista aplicación.
Aquí es cuando entra la programación. La _Programación_ es el acto de construir un _programa_- un conjunto de instrucciones precisas que le dicen qué hacer a un computador. Ya que los computadores son bestias tontas y pedantes, programar es fundamentalmente tedioso y frustrante.
Afortunadamente, si puedes superar esto, y quizás incluso disfrutar el rigor de pensar en términos en los que máquinas tontas puedan gestionar, programar puede ser gratificante. Te permite hacer cosas en segundos que te tomarían _muchísimo tiempo_ si lo hicieras a mano. Es una manera de hacer que tu herramienta computador haga cosas que no podía hacer antes. Y es un maravilloso ejercicio de pensamiento abstracto.`;


// 1.Creación de un patrón básico
// Con representación literal
const pruebaLiteral = /programación/;
// Con constructor

// const pruebaConstructor = new RegExp('programación');
// const match = pruebaConstructor.test(frase);
const match = pruebaLiteral.test(texto);
match;
// 2. Validación de un número de teléfono
const telefono = '+34 91-000-10-25';
const esValidoTelefono = telefono.match(/^[+\d\-\s]+$/);
const respuesta01 = ` Teléfono ${telefono} es ${
  esValidoTelefono ? 'válido' : 'no válido'
}`;
respuesta01;
// 3. Extracción
const extraerPalabra = texto.match(/es/g).length;
const respuesta02 = `${
  extraerPalabra === null
    ? 'No hay coincidencia de esta palabra'
    : ` La palabra aparece ${
      extraerPalabra > 1 ? `${extraerPalabra} veces` : `${extraerPalabra} vez`
    } `
}`;
respuesta02;
// 4. Reemplazar
const reemplazarTexto = frase.replace(/mejor que\b/, 'superior a');
reemplazarTexto;

// Clase 2
// Paréntesis de agrupación
const nombreYApellido = 'Carlos Marchena';
const obtenerNombreYApellido = /(\w+) (\w+)/;
nombreYApellido.match(obtenerNombreYApellido);
nombreYApellido;
const apellidoComaNombre = nombreYApellido.replace(
  obtenerNombreYApellido,
  '$2, $1',
);
apellidoComaNombre;
const mensaje = 'Carlos es profesor en SWC';
const profesor = mensaje.match(/(carlos) es profesor en (SWC)/i)[1];
profesor;
const empresa = mensaje.match(/(carlos) es (profesor) en (swc)/i)[3];
empresa;
// Capturar alternando
const pais = 'Dinamarca';
const verificarPorte = pais.match(/(españa|dinamarca|portugal)/i);
verificarPorte;
