 //asignamos a campo_entrada el valor del texto escrito en campo de entrada
const campo_entrada = document.querySelector("#texto-a-encriptar");

//asignamos a campo_encriptado el valor del texto obtenido en campo encriptado
const campo_encriptado = document.querySelector("#texto-encriptado");

//definimos el arreglo que se ocupara de relacionar la posicion 0 y 1 de todos los indices
const matriz_code = [
    ["ames","b3mq"],
    ["e","enter"],   //indice 2 
    ["i","imes"],    //indice 1
    ["a","ai"],      //indice 3  
    ["o","ober"],    //indice 4
    ["u","ufat"],    //indice 5
];

//borramos el placeholder de textarea al hacer clic en el
const textArea = document.getElementById("texto-a-encriptar");

textArea.addEventListener("focus", function() {
  textArea.value = "", 
  textArea.placeholder = "";
});



// declaramos una funcion que captura el evento del boton "encriptar"
function btnEncriptar(){
    //dentro de este boton , llamaremos a la funcion encriptarTexto
    const texto = encriptarTexto(campo_entrada.value.toLowerCase() );
    //hacemos que el campo 2 recib el valor del texto encriptado
   campo_encriptado.value=texto;
   //devolvemos el placeholder al campo entrada
   document.getElementById("texto-a-encriptar").placeholder = "Aquí escribe tu texto a encriptar. Las mayúsculas se convertirán a minúsculas.                                       Para reiniciar el encriptador puedes presionar culaquier botón dos veces.";

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
    
    campo_entrada.value=""; //borramos el campo de entrada
    return fraseEncriptada; //devolvemos la variable  con el texto encriptado
    
}

// declaramos una funcion que captura el evento del boton "desencriptar"
function btnDesencriptar(){
    //dentro de este boton , llamaremos a la funcion desEncriptar
    const texto = desEncriptar(campo_encriptado.value);
    //hacemos que el campo 1 reciba el valor del texto desencriptado
   campo_entrada.value=texto;
}

//declaramos una funcion que se encarga de desencriptar basada en el arreglo matriz_code
function desEncriptar(fraseDesencriptada){
    for(let i=0; i < matriz_code.length; i++){
        if(fraseDesencriptada.includes(matriz_code[i][1])){
            fraseDesencriptada = fraseDesencriptada.replaceAll(
                matriz_code[i][1], matriz_code[i][0]
            );
        }
    }
    campo_encriptado.value=""; //borramos el campo encriptado
    return fraseDesencriptada; //devolvemos la variable  con el texto desencriptado
    
}
