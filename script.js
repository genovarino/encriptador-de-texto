 //asignamos a campo_texto el valor del texto escrito en campo de entrada
const campo_texto = document.querySelector("#texto-encriptado");

//asignamos a campo_mensaje el valor del texto obtenido en campo encriptado
const campo_mensaje = document.querySelector("#campo-mensaje");

//definimos el arreglo que se ocupara de relacionar la posicion 0 y 1 de todos los indices
const matriz_code = [
    ["e","enter"],   //indice 0
    ["i","imes"],    //indice 1
    ["a","ai"],      //indice 2
    ["o","ober"],    //indice 3
    ["u","ufat"],    //indice 4
];

// declaramos una funcion que captura el evento del boton "encriptar"
function btnEncriptar(){
    //dentro de este boton , llamaremos a la funcion encriptarTexto
    const texto = encriptarTexto(campo_texto.value);
    //hacemos que el campo 2 recib el valor del texto encriptado
   campo_mensaje.value=texto;
}

//declaramos una funcion que se encarga de encriptar basada en el arreglo matriz_code
function encriptarTexto(fraseEncriptada){
    for(let i=0; i < matriz_code.length; i++){
        if(fraseEncriptada.includes(matriz_code[i][0])){
            fraseEncriptada = fraseEncriptada.replaceAll(
                matriz_code[i][0], matriz_code[i][1]
            );
        }
    }
    return fraseEncriptada;
}
