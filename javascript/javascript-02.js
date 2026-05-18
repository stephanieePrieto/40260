let resultado = document.getElementById("resultado")
let botones = document.getElementsByTagName("button")
for (const key in botones) {
    if (Object.prototype.hasOwnProperty.call(botones, key)) {
        const boton = botones[key];
        if (boton.className != "operadores") 
            boton.addEventListener("click", pintar)
        else
            boton.addEventListener("click", pintar2)
        // console.log(boton)
    }
}

function pintar(e){
    console.log(e.target.innerText)
    resultado.value += e.target.innerText
}

let operadores = document.getElementsByClassName("operadores")
for (const key in operadores) {
    if (Object.prototype.hasOwnProperty.call(operadores, key)) {
        const operador = operadores[key];
        operador.addEventListener("click", pintar2)
        // console.log(operador)
    }   
}   

function pintar2(e){
    console.log(e.target.innerText)
    if (e.target.innerText == "+" )
        suma()
    if (e.target.innerText == "=" )
        igual()
    if (e.target.innerText == "/" )
        division()
    if (e.target.innerText == "-" )
        resta()
    if (e.target.innerText == "C" )
        limpiar()
}

let prm1;
let operacion;

function suma(){
    prm1 = resultado.value;
    operacion = "+";
    resultado.value = "";
}

function resta(){
    prm1 = resultado.value;
    operacion = "-";
    resultado.value = "";
}

function multiplicacion(){
    prm1 = resultado.value;
    operacion = "*";
    resultado.value = "";
}

function division(){
    prm1 = resultado.value;
    operacion = "/";
    resultado.value = "";
}

function limpiar(){
    prm1 = "";
    resultado.value = "";
}

function igual(){
    let prm2 = resultado.value;
    
    if (operacion == "+") {
        resultado.value = parseInt(prm1) + parseInt(prm2);
    }
    if (operacion == "-") {
        resultado.value = parseInt(prm1) - parseInt(prm2);
    }
    if (operacion == "*") {
        resultado.value = parseInt(prm1) * parseInt(prm2);
    }
    if (operacion == "/") {
        resultado.value = parseInt(prm1) / parseInt(prm2);
    }
}