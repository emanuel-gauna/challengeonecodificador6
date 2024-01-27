let qs = (selector) =>{
   return document.querySelector(selector);
}

let encriptar = qs("#encriptar");
let desencriptar = qs("#desencriptar");
let texto = qs("#texto");
let resultado = qs("#resultado");
let copiar = qs("#copiar");
let muñeco = qs(".muñeco");

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
    return encriptado;
}

function btnEncriptar() {
    if(texto.value === ""){
        return resultado.value = "Ningún mensaje fue encontrado. ";        
     }else{
        resultado.value = texto.value;
        muñeco.style.display = "none";
     }
}


