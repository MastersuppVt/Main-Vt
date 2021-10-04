
setTimeout(function () {
    document.getElementById("cargadoFull").classList.add("cargadoFull2");
    console.log("hola")
}, 5000);
window.addEventListener("load", function () {
    document.getElementById("loader").classList.toggle("loader2")
})
let ultimosDonadores =["Pedro","Juan","Diego"]
console.log(ultimosDonadores)
const form = document.getElementById("formDonate")
form.addEventListener("submit", function (event) {
    let confirmar = Number(prompt("confirma el monto"))
    datosForm = new FormData(form)
    let monto = Number(datosForm.get("monto"))
    if(monto===confirmar){
        const total = confirmar + 300
        alert("su monto a pagar sera"+ " " +total)
        ultimosDonadores.unshift(datosForm.get("nombre"))
        console.log(ultimosDonadores)
    }
    else{
    alert("pago cancelado")
    }
    event.preventDefault()
})



ScrollReveal().reveal('.logo', { delay: 500 });
ScrollReveal().reveal('.secUno', { delay: 500 });
ScrollReveal().reveal('.secDos', { delay: 500 });
ScrollReveal().reveal('.secTres', { delay: 500 });
ScrollReveal().reveal('.secCuatro', { delay: 500 });
ScrollReveal().reveal('.secCinco', { delay: 500 });
ScrollReveal().reveal('.secSeis', { delay: 500 });
ScrollReveal().reveal('.secSiete', { delay: 500 });
ScrollReveal().reveal('.secOcho', { delay: 500 });
