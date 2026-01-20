let boton = document.getElementById("btnCalendario");
let contenedor = document.getElementById("contenedorCalendario");

boton.onclick = function () {
    if (contenedor.style.display === "none") {
        contenedor.style.display = "block";
        boton.innerHTML = "Ocultar calendario";
    } else {
        contenedor.style.display = "none";
        boton.innerHTML = "Mostrar calendario";
    }
};
