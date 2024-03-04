**index.html**

Este código es un archivo HTML estático que muestra una página web de cifrado de texto. La página web consta de dos secciones principales: la sección de entrada y la sección de salida.
 
La sección de entrada contiene un título, un logotipo y un área de texto donde el usuario puede introducir el texto que desea cifrar. La sección de entrada también tiene dos botones: "Encriptar" (Encriptar) y "Desencriptar" (Desencriptar). Estos botones llaman a las funciones de JavaScript btnEncriptar() y btnDesencriptar(), respectivamente.

![image](https://github.com/genovarino/encriptador-de-texto/assets/158294926/49a07726-3c4f-405c-a735-bef97b79b382)

La sección de salida muestra el texto cifrado o descifrado en un área de texto. También incluye una imagen de un hombre, que puede utilizarse para proporcionar comentarios o realizar acciones basadas en la funcionalidad del encriptador.

El archivo HTML incluye varios archivos CSS y JavaScript para diseñar y agregar interactividad a la página web.

El código JavaScript hace que la página tenga la siguiente funcionalidad:
El área de texto de entrada convierte todo el texto de entrada a minúsculas.
El botón "Encriptar" encripta el texto y el botón "Desencriptar" lo desencripta.

**script.js**
Este código es una implementación simple de un encriptador y desencriptador de texto usando JavaScript. Está diseñado para ejecutarse en un entorno web, donde puede interactuar con elementos HTML para recibir entradas y mostrar salidas. El código consta de varias partes:

Declaraciones de variables:

const campo_entrada = document.querySelector("#texto-a-encriptar");

const campo_encriptado = document.querySelector("#texto-encriptado");

const matriz_code = [["ames","m3OL"],["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];


campo_entrada y campo_encriptado son variables que hacen referencia a elementos HTML. El primero se utiliza para cifrar el texto, mientras que el segundo se utiliza para mostrar el texto cifrado.
matriz_code es una matriz de matrices que contiene la asignación para el cifrado y descifrado. Consiste en pares de palabras o caracteres equivalentes, donde el primer elemento es la palabra/carácter original y el segundo elemento es la forma cifrada/descifrada.

Declaraciones de funciones:

btnEncriptar(): Esta función se llama cuando se hace clic en el botón "Encriptar". Obtiene el texto de campo_entrada, lo encripta mediante la función encriptarTexto() y muestra el resultado en campo_encriptado.
encriptarTexto(fraseEncriptada): esta función toma una cadena como argumento, pasa a través de matriz_code y reemplaza cualquier aparición de la palabra/carácter original con la forma cifrada. A continuación, devuelve la cadena cifrada.
btnDesencriptar(): Esta función se llama cuando se hace clic en el botón "desencriptar". Obtiene el texto de campo_encriptado, lo descifra usando la función desEncriptar() y muestra el resultado en campo_entrada.
desEncriptar(fraseDesencriptada): esta función toma una cadena como argumento, pasa a través de matriz_code y reemplaza cualquier aparición de la palabra/carácter cifrado con la forma original. A continuación, devuelve la cadena descifrada.


**matrix.js**

El código proporcionado es una implementación de JavaScript de una animación simple de estilo matriz, que a menudo se ve en películas o programas de televisión cuando se muestra una escena de piratería.

Aquí hay un desglose del código:

En primer lugar, se obtienen e inicializan los elementos DOM y el contexto necesarios. Se obtiene el elemento canvas y se crea su contexto de representación 2D. Las dimensiones del lienzo se establecen para que coincidan con el tamaño de la ventana.

Se define una lista de caracteres, que se utilizarán en la animación.

Se crea una matriz vacía para almacenar instancias de objetos Matrix. Se define una constante para establecer el número deseado de objetos de matriz que se van a crear.
También se define el tamaño de la fuente y el número de columnas que caben en el espacio en función del tamaño de la fuente.

Se crea una clase Matrix, que representará a cada caracter de la animación.
La clase tiene un constructor que toma las posiciones x e y, y un método dibujar que crea un objeto Matrix, asigna un carácter aleatorio y lo dibuja en el marco.
La posición vertical de cada caracter se actualiza y, si se sale de la pantalla, se reposiciona y se le da una nueva velocidad.

Se define una función actualizar, que se ejecuta en un bucle para actualizar la animación. Comprueba si el número de objetos Matrix es menor que la cantidad deseada y, si es así,
crea un nuevo objeto Matrix con una posición aleatoria y lo agrega a la matriz. El espacio (Canva) se rellena con un rectángulo negro semitransparente para crear un efecto de fundido de entrada.
Se llama al método dibujar (draw) para todos los demás objetos Matrix de la matriz y el bucle de animación se configura mediante requestAnimationFrame.

La función actualizar se llama una vez para iniciar la animación.

En resumen, este código crea una animación de estilo matricial simple utilizando JavaScript y el lienzo HTML, mostrando una lista de desplazamiento de caracteres aleatorios en un color verde semitransparente.

**style.css**
Este archivo CSS se utiliza para definir la presentación de un documento escrito en HTML (HyperText Markup Language).

Aquí hay un desglose de las diferentes secciones del código:

Animación del logotipo: En esta sección se define una animación de fotogramas clave para el logotipo, que aumenta y reduce la escala del logotipo.
Posicionamiento del logotipo: En esta sección se define el posicionamiento del logotipo y se le aplica la animación.
Efecto matriz: Esta sección define un estilo para el "efecto matriz" con un fondo semitransparente y un borde redondeado.
Lienzo para fondo: esta sección define un elemento de lienzo que se coloca detrás del texto y tiene un índice z más bajo que el texto.
Estilo del título: esta sección define el estilo del título, incluida la fuente, el color, la decoración del texto y la sombra del texto.
También incluye un efecto de desplazamiento para el título que cambia la sombra del texto.
Estilo de entrada y salida: En esta sección se define el estilo de los campos de entrada y salida, incluido el relleno, la alineación del texto y el tamaño de la fuente.
Estilo de pie de página: esta sección define el estilo del pie de página, incluida la alineación del texto, el color y el color de fondo.
Consultas de medios: esta sección incluye reglas CSS que se aplican a tamaños de pantalla específicos.
Aquí hay dos conjuntos de reglas: uno para pantallas de hasta 600 px de ancho 

![Captura de pantalla 2024-03-04 124333](https://github.com/genovarino/encriptador-de-texto/assets/158294926/6b3244c9-4a35-48b0-a394-a9120852bc78)

y otro para pantallas de 601 px de ancho o superiores.
Dentro de las consultas de medios, hay varias secciones que definen el estilo de los diferentes elementos de la página para tamaños de pantalla específicos.
Estas son algunas de las secciones clave:

Estilo del cuadro de entrada para pantallas pequeñas: en esta sección se define el estilo del cuadro de entrada en pantallas pequeñas, incluido el tamaño de fuente, el color y el radio del borde.
Estilo de botones para pantallas pequeñas: en esta sección se define el estilo de los botones de pantallas pequeñas, incluido el color, el color de fondo y el relleno.
Estilo del cuadro de salida para pantallas pequeñas: en esta sección se define el estilo del cuadro de salida en pantallas pequeñas, incluido el tamaño de fuente, el color y el color de fondo.
Estilo del cuadro de entrada para pantallas grandes: en esta sección se define el estilo del cuadro de entrada en pantallas grandes, incluido el tamaño de fuente, el color y el radio del borde.
Estilo de botones para pantallas grandes: en esta sección se define el estilo de los botones de pantallas grandes, incluidos el color, el color de fondo y el relleno.
Estilo del cuadro de salida para pantallas grandes: en esta sección se define el estilo del cuadro de salida en pantallas grandes, incluido el tamaño de fuente, el color y el color de fondo.

**matrix.css**

El código proporcionado es una implementación de JavaScript de una animación de estilo "Matrix", similar a la que se ve en la película "The Matrix". Aquí hay una explicación del código:

En primer lugar, se configuran los elementos HTML y el contexto necesarios. Se obtiene un elemento canvas y se crea su contexto de dibujo 2D. El tamaño del lienzo se establece para que coincida con el tamaño de la ventana. Se define una matriz de caracteres, que se utilizarán para crear la animación. 

A continuación, se define una clase denominada Matrix, que representa un único elemento de la animación. La clase tiene un constructor que toma una coordenada x e y y un método dibujar que se usará para representar el objeto en el lienzo.

Dentro del método dibujar, se selecciona un carácter aleatorio de arrayCaracteres y se determina su velocidad vertical. A continuación, el caracter se dibuja en el lienzo en las coordenadas especificadas. Después de eso, la posición vertical se actualiza en función de la velocidad. 
Si los caracteres va más allá de la altura del lienzo, se mueve a una nueva posición x aleatoria y se reasigna su velocidad.

La función actualizar se define y se llama de forma recursiva para actualizar la animación. Comprueba si codigoArray (que contiene los objetos Matrix) está por debajo del límite definido. Si es así, se crea un nuevo objeto Matrix y se agrega a la matriz. A continuación, el lienzo se rellena con un color negro semitransparente para crear un efecto de fundido.

A continuación, la función actualizar itera a través de codigoArray y llama al método dibujar de cada objeto para dibujarlo en el lienzo. La animación se actualiza mediante requestAnimationFrame(actualizar), que llamará a la función actualizar antes del siguiente repintado. La variable de fotogramas se incrementa para controlar la velocidad de fotogramas de la animación.

Finalmente, se llama a la función actualizar para iniciar la animación










