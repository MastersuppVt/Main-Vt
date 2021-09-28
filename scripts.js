
setTimeout(function () {
    document.getElementById("cargadoFull").classList.add("cargadoFull2");
    console.log("hola")
}, 5000);
window.addEventListener("load", function () {
    document.getElementById("loader").classList.toggle("loader2")
})
const form = document.getElementById("formDonate")
form.addEventListener("submit", function (event) {
    let datosForm = new FormData(form)
    let monto =datosForm.get("monto")
    
    const total = monto + 300
    alert("su monto a pagar sera"+ " " +total)
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
