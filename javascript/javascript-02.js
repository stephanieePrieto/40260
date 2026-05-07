let resultado = document.getElementById("resultado")
let botones = document.getElementsByTagName("button")
for (const key in botones) {
    if (Object.prototype.hasOwnProperty.call(botones, key)) {
        const boton = botones[key];
        boton.addEventListener("click", pintar)
        console.log(boton)
    }
}

function pintar(e){
    console.log(e.target.innerText)
    resultado.value = e.target.innerText
}