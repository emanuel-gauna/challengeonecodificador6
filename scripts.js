let qs = (selector) =>{
   return document.querySelector(selector);
}

let encriptar = qs("#encriptar");
let desencriptar = qs("#desencriptar");
let texto = qs("#texto");
let parrafo = qs(".resultado");
let resultado = qs("#resultado");
let btnCopiar = qs("#copiar");
let muñeco = qs(".muñeco");

let valorDelResultado = resultado.innerHTML; 

console.log(texto.value)
console.log(resultado.value)

/* La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat" */

function codificar() {
let encriptado = texto.value.replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");
    return resultado.innerHTML = encriptado;
}
function decodificar(){
    let descifrado = texto.value.replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a") 
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");

    return  resultado.innerHTML = descifrado;
}


function btnEncriptar() {
    if(texto.value == ""){
        resultado.style.color = "red"
        resultado.innerHTML= "Ningún mensaje fue encontrado. ";        
     }else{
         muñeco.style.display = "none";
         parrafo.style.display = "none";
         btnCopiar.removeAttribute("disabled");
         codificar() = texto.value ;
     }
    }

function btnDesencriptar(){
    if(texto.value == ""){
        resultado.style.color = "red"
        resultado.innerHTML= "Ningún mensaje fue encontrado. ";        
     }else{
         muñeco.style.display = "none";
         parrafo.style.display = "none";
         btnCopiar.removeAttribute("disabled");
         decodificar() = texto.value ;
     }
}
/* evento del boton */
    btnCopiar.addEventListener('click', () =>{
        /* crear un rango */
    let rango = document.createRange();
    /* asignar el cuerpo al rango*/
    rango.selectNodeContents(resultado);
    /*crear una ventana de la selección*/
    const seleccion = window.getSelection();
    /*colocar el rango en la selección*/
    seleccion.removeAllRanges(rango);
    /*  */
    seleccion.addRange(rango);
    /* copiar los datos */
    document.execCommand('copy');
    /* remover el rango creado */
    seleccion.removeAllRanges();
    alert("Mensaje copiado al portapapeles.");
    resultado.innerHTML = '';
    texto.value = "";
});

     

   
      
     


