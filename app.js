let canvas = document.getElementById("miCanvas");
let ctx = canvas.getContext("2d");

function crearTarea() {
    let clave = document.getElementById("clave").value;
    let nombreTarea = document.getElementById("nombreTarea").value;
    localStorage.setItem(clave, nombreTarea);
    mostrarTareas();
    clave.value = "";
    nombreTarea.value = "";
}

function mostrarTareas(){
    let off = document.getElementById("pendiente");
    for(let i = 0; i < localStorage.length; i++){
        let clave = localStorage.key(i);
        let valor = localStorage.getItem(clave);
        off.innerHTML += "<div>" + clave + " -- " + valor + "</div>"
    }
    dibujar();
}

function dibujar(){
    let x = 10;
    let y = 10;
    for(let i = 0; i < localStorage.length; i++){
        ctx.fillRect(x, y, 20, 20);
        x += 40;
        if(x > canvas.width - 20){
            x = 10;
            y += 20;
        }
    }

}





