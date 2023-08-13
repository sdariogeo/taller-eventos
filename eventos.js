

document.addEventListener("DOMContentLoaded", () => {
    
    const div = document.getElementById("contenedor");
    const boton = document.getElementById("boton");

    div.addEventListener("click", () => {

        alert("Hola! Soy el div");

    });

    boton.addEventListener("click", (event) => {

        event.stopPropagation();
        
    });

});

