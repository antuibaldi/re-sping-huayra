const divSistemasOperativos = document.querySelector("#sistemasoperativoslinux");
const inputBuscadorSistemas = document.querySelector("#buscador-de-SO");


// Function to create system operation elements
function crearSO(lista) {
    divSistemasOperativos.innerHTML = "";  // Clear previous content

    for (let i = 0; i < lista.length; i++) {
        const div = document.createElement("div");
        div.classList.add("SO");

        const nombre = document.createElement("h3");
        nombre.textContent = lista[i].nombre;
        nombre.classList.add("nombreDelSistemaOperativo");

        const imagen = document.createElement("img");
        imagen.src = lista[i].imagen;
        imagen.classList.add("imagenSistemaOperativo");

        const descripcion = document.createElement("p");
        descripcion.textContent = lista[i].descripcion;
        descripcion.classList.add("descripcionDelSistemaOperativo");

        const botonDescarga = document.createElement("a");
        botonDescarga.classList.add("btn", "btn-outline-success", "m-1");
        botonDescarga.href = lista[i].linkDescarga;
        botonDescarga.textContent = "Descargar";  // Button text

        const botonPagina = document.createElement("a");
        botonPagina.classList.add("btn", "btn-outline-primary", "m-1");
        botonPagina.href = lista[i].linkPagina;
        botonPagina.textContent = "Visitar Página";  // Button text


        // Append elements to the container for each operating system
        div.appendChild(nombre);
        div.appendChild(imagen);
        div.appendChild(descripcion);
        div.appendChild(botonDescarga);
        div.appendChild(botonPagina);
        

        // Append the operating system container to the main list
        divSistemasOperativos.appendChild(div);
    }
}



// Initialize the system list
crearSO(databaseSOJSON);

// Search function
function buscadorDeNombreSO() {
    const nombreLeido = inputBuscadorSistemas.value.toLowerCase();
    divSistemasOperativos.innerHTML = "";

    if (nombreLeido.trim() !== "") {
        const filtrados = databaseSOJSON.filter(SO => SO.nombre.toLowerCase().includes(nombreLeido));
        crearSO(filtrados);
    } else {
        crearSO(databaseSOJSON);
    }
}

// Add search event listener to the input
inputBuscadorSistemas.addEventListener("input", buscadorDeNombreSO);
