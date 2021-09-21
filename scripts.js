var nombre = prompt("ingrese su nombre");
var edad = Number(prompt("ingrese su edad"));
var contraseña = prompt("ingrese su contraseña");
while(edad < 18){
    var edad = Number(prompt("ingrese su edad"));
}
alert("bienvenido");

setTimeout(function(){
    document.getElementById("cargadoFull").classList.add("cargadoFull2");
    console.log("hola")},5000);
window.addEventListener("load", function(){
         document.getElementById("loader").classList.toggle("loader2")
    }) 
   
ScrollReveal().reveal('.logo',{ delay:500 });
ScrollReveal().reveal('.secUno',{ delay:500 });
ScrollReveal().reveal('.secDos',{ delay:500 });
ScrollReveal().reveal('.secTres',{ delay:500 });
ScrollReveal().reveal('.secCuatro',{ delay:500 });
ScrollReveal().reveal('.secCinco',{ delay:500 });
ScrollReveal().reveal('.secSeis',{ delay:500 });
ScrollReveal().reveal('.secSiete',{ delay:500 });
ScrollReveal().reveal('.secOcho',{ delay:500 });
