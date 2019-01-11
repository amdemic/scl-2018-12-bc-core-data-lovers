# App Pokedex Kanto

### Definición del producto
Pokedex Kanto App Web y Móvil te permitirá conocer de manera rápida y sencilla información relevante en relacion a los Pokemones de la región Kanto con el objetivo de que puedas convertirte en un maestro Pokemon.
Dedicado para jugadores novatos y expertos de Pokemon Go.

**Proceso y decisiones del diseño**
Se realizó una investigación previa en varias páginas Web a cerca de qué información estaba disponible a cerca de  los pokemones. Generalmente se entregaba muchísima información al mismo tiempo,que quizá para un novato o un jugador experto que quiera sólo conocer información relevante como datos de el/los tipo/s, Nombre o cantidades por Tipo les sea más sencillo con Pokedex Kanto.
Las decisiones del diseño se tomaron para que la App sea lo mas amigable con la App Pokemon Go dado que está pensada para que sea utilizada por usuarios familiarizados con dicha aplicación. Por lo que se tomaron colores referenciales de Pokemon Go y se trató de hacer nuestra App lo mas amigable posible para que sea facil y rápida una consulta en paralelo, es decir mientras se juega.

### Historias de usuario

Se detallan a continuación 5 historias de usuario:

1. Enunciado: Yo como usuario de la App quiero poder filtrar los pokemones por tipo para ser qué pokemones son     del mismo tipo. 
   Criterio de Aceptación: 
   * Quiero que me liste los pokemones del tipo que seleccioné.
   * Que cada pokemon de la lista muestre su imagen, número y el/los tipos.
   ##### TERMINADO
2. Enunciado: Yo como usuario de App quiero poder organizar los pokemones de A-Z o al reves para conocer su        orden alfabético segun su nombre.   
   Criterio de Aceptación: 
   * Quiero poder seleccionar orden A-Z o Z-A.
   * Quiero ver el listado de pokemones segun orden seleccionado.
   ##### TERMINADO
3. Enunciado: Yo como usuario de la App quiero poder organizar los pokemones de 1-151 o al reves para conocer      la posición específica del pokemon que busco.
   Criterio de Aceptación: 
   * Quiero poder seleccionar orden ascendente o descendente.
   * Quiero ver el listado de pokemones segun orden seleccionado.
   ##### TERMINADO
4. Enunciado: Yo como usuario de la App quiero poder hacer una busqueda ingresando cualquier N° o letra y          quiero obtener como resultado el o los pokemones que contengan el dato ingresado en su nombre o en su N° de     pokemon.
   Criterio de Aceptación: 
   * Quiero poder ingresar en la busqueda uno o mas numeros.
   * Quiero poder ingresar en la busqueda una o mas letras.
   * Quiero recibir un mensaje de error si mi búsqueda es errónea.
   * Quiero obtener como resultado el o los pokemones que cumplan con los criterios de busqueda (N° o letras).
   ##### NO INICIADO
5. Enunciado: Yo como usuario de la App quiero poder ver detalles particulares del pokemon que seleccione de       una lista.
   Criterio de Aceptación: 
   * Quiero poder ver imagen del pokemon.
   * Quiero poder ver su N°.
   * Quiero poder ver su nombre.
   * Quiero poder ver una breve descripción del pokemon.
   * Quiero poder ver su altura.
   * Quiero poder ver su peso.
   * Quiero poder ver si nace de huevo o no.
   * Quiero poder ver sus debilidades.
   * Quiero poder ver su cadena de evoluciones (cadena de evoluciones no se muestra aún).
   ##### EN PROCESO  


#### Organizando las tareass

Tablero inicial

<a href="https://ibb.co/dKJRKh2"><img src="https://i.ibb.co/884H8h5/tablero-inicial-1.jpg" alt="tablero-inicial-1" border="0"></a>

Tablero final Vista 1

<a href="https://ibb.co/FgV0czs"><img src="https://i.ibb.co/5BFnCLY/tablero-final-1.jpg" alt="tablero-final-1" border="0"></a>

Tablero final Vista 2

<a href="https://ibb.co/MpLtbxk"><img src="https://i.ibb.co/Gkj8X4Q/tablero-final-2.jpg" alt="tablero-final-2" border="0"></a>

### Diseño de la Interfaz de Usuario

#### Prototipo de baja fidelidad

Prototipo Vista 1
<a href="https://ibb.co/7SMB5SK"><img src="https://i.ibb.co/Zf4vPfx/prototipo-baja-fidelidad.jpg" alt="prototipo-baja-fidelidad" border="0"></a>

Prototipo Vista 2
<a href="https://ibb.co/jM4tHQh"><img src="https://i.ibb.co/xj5Z3Bh/Image-from-i-OS-2.jpg" alt="Image-from-i-OS-2" border="0"></a><br /><a target='_blank' href='https://aluminumsulfate.net/aluminum-oxide'>physical and chemical properties of aluminium oxide</a><br />

Flujo
<a href="https://ibb.co/ZLxqpfh"><img src="https://i.ibb.co/6nFj7y4/FLUJO.jpg" alt="FLUJO" border="0"></a>

#### Prototipo de alta fidelidad

* Se realiza prototipado de alta fidelidad con Figma, link:

https://www.figma.com/proto/bfu042iuUbUwv1YJ1ZbctEx8/pokemon-datalovers?node-id=177%3A0&scaling=scale-down


#### Testeos de usabilidad

Se realizaron 3 test de usabilidad según recomendación.

1. Maria (32 años), jugadora principiante; (omito delegar tarea para ver qué puede lograr intuitivamente para conocer qué tan amigable es la App) lo primero que le llama la atención a Maria son la imágenes de los pokemones y pregunta ¿qué es esto? porque segun ella no sabe si es un juego o una App.
Pasa desapercibidos los selectores para tipo y para orden; por lo que realiza click en el primer pokemon de la lista y accede a sus propiedades particulares. 
El modal le muestra informacion adicional lo cual le interesó, no tiene problemas para devolverse a la pantalla inicial haciendo click fuera del modal.
Le parece redundante que en la imagen de la primera interfaz aparezca el dato del tipo siendo que en la segunda interfaz con el mismo pokemon lo vuelve a nombrar. 
Luego de unos minutos localiza los selectores y el que indica ser el más llamativo y util para ella es el orden de la A-Z para conocer sus nombres ordenadamente, segun ella más fácil para recordar.

2. Bastian (20 años) jugador experto; le doy la tarea de que filtre pokemones por tipo Veneno y me diga cuantos son, no lo logra, dado que también pasa por alto selector de Tipo, y busca poder hacerlo sobre las imagenes.
Una vez que localiza los selectores realiza filtro pero pasa desapercibido el cálculo de cantidad de pokemones por tipo Veneno. Repara en las evoluciones de los pokemones. Luego de unos segundos veo que no hace click en las imagenes, le indico que sí puede hacer click en ellas y lo realiza. Una vez en el modal no sabe como salirse dice que esperaba una x en el borde superior derecho. Luego me comenta que esperaba que los selectores estuviesen en el borde superior derecho de la pantalla. Así como tambien esperaba un menu en la parte superior izquierda.

3. René (41 años) jugador principiante; le doy la tarea de que filtre pokemones tipo Agua y los ordene alfabeticamente y me diga cuántos son, no lo logra pasa desapercibido el selector de orden.
Trata de buscar los pokemones con características de agua sólo analizando las imagenes una a una.
Una vez que clickea un pokemon pregunta como salir del modal.

### Cambios realizados a la App:

* Se incluyen los selectores dentro de la imagen principal de la App.
* Se elimina tipo/s de la imagen del pokemon del modal.
* Se aplica efecto sombra a las tarjetas y movimiento para llamar a la acción de click.
* Se reduce el ancho de los selectores para dar la sensacion visual de que son clickeables.
* Cambio de color de fondo de selectores en proceso.
* X en borde superior derecho del modal en proceso.
* Agregar a modal cadena de evoluciones en proceso.

# Link Trello #
https://trello.com/b/CHGf6eLm/proyecto-ii-pokemon

# Desarrollo de App #
* Veronica Machola
* Andrea De Miranda