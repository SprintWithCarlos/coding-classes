<img src="../../modulos/img/swc.jpg" alt="Kitten"
	title="A cute kitten" width="100" height="100" style="border-radius: 50%" />

# Sprint with Carlos
## Proyecto 02: Blog
### Software Requirements Specification (SRS)
#### 1. Introducción
David ha conocido a otros entusiastas de la programación en un meetup de JavaScript, donde se reúnen mensualmente para compartir mejores prácticas y resolver dudas en su aprendizaje autodidacta. 
![foto](https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80)
Han creado un grupo de Telegram en el cual se comparten recursos útiles que hasta el momento ha funcionado bien. 

Con el inicio del nuevo curso después del verano el grupo ha crecido por el interés de más personas en aprender a programar.

 Deciden que disponer de un espacio en el cual se puedan compartir los recursos del grupo de Telegram y que sea público para que cualquiera pueda leerlo puede ser muy útil para los actuales miembros del grupo y para todos aquellos que se estén planteando iniciar su proceso de aprendizaje. 
 
 Han revisado distintas opciones: Medium, WordPress, página de Facebook, pero visto que ninguno cumple exactamente con lo que quieren y que disponen ya de herramientas y conocimientos suficientes para crear su propio sistema de gestión de contenidos, deciden crear un blog como un proyecto conjunto.

 Deciden hacer un primer prototipo, donde el foco será la funcionalidad, postergando la fidelidad de la UI y la persistencia de los datos para una fase posterior, donde contarán con la colaboración de una diseñadora UI y un informático que en su trabajo utiliza SQL diariamente.

#### 2. Requerimientos de usuario
- Cualquier visitante puede leer la lista de artículos, el detalle de cada artículo, el perfil del autor y la página donde se describe tanto el proyecto como los integrantes del mismo.
- Todos los integrantes tendrán acceso al repositorio privado y podrán hacer cambios directamente en el código.
- Cada Integrante tendrá su propio perfil.
- Los artículos deberán tener una foto principal y una categoría.
- El blog no contará con autenticación en esta fase.
#### 3. Requerimientos del sistema 
- El blog deberá realizarse siguiendo el patrón MVC utilizando Node.
- Los datos no tendrán persistencia en base de datos en el prototipo, se guardarán en un documento json en la carpeta public.
- El peso de cada vista no podrá superar los 100k, por lo tanto las fotos deberán estar comprimidas.
- Las vistas deberán adaptarse al dispositivo del usuario (*responsive*).
- El header y el footer deberán estar definidas como partials e importadas en cada vista.
- El prototipo puede ser desplegado en cualquier plataforma (Github Pages, Now, Heroku). No requiere un nombre de dominio
<hr>
# Recomendaciones para desarrollar el proyecto
1. Las *SRSs* facilitan las especificaciones, constituyen la primera fase en el desarrollo de una aplicación. Antes de pasar a la implementación (picar código), es necesario realizar el diseño (arquitectura del proyecto). Tomar al menos una hora para pensar sin distracciones. Preferible hacerlo directamente en papel y lápiz primero para pasarlo luego a algún soporte digital. Vale incluso una foto de las notas.
2. Redactar el mapa del sitio. Cualquier herramienta es válida, desde mapas mentales hasta hojas de cálculo
3. Enfocarse en añadir funcionalidades y obviar temas de diseño UI ya que serán resueltos posteriormente
4. Escribir las historias de usuario de la implementación y definir las tareas antes de empezar a escribir el código
5. Tener muy claro los criterios de aceptación (Criteria of Acceptance o [COAs](../../modulos/semana01/clase-semana01.md)) de cada funcionalidad, en los términos descritos en este documento
**Opcional** Definir tests para cada funcionalidad y utilizar TDD para la implementación de la misma
