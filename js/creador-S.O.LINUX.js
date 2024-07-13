const divSistemasOperativos = document.querySelector("#sistemasoperativoslinux");
const inputBuscadorSistemas = document.querySelector("#buscador-de-SO");

function crearSO(lista) {
    divSistemasOperativos+="";

  for ( i = 0; i < lista.length; i++) {
    const div = document.createElement("div");
    div.classList.add("SO");

    const nombre = document.createElement("p");
    nombre.textContent = lista[i].nombre;
    nombre.classList.add("nombreDelSistemaOperativo");

    const enlaceImagen = document.createElement("a");
    enlaceImagen.href = lista[i].enlace;
    enlaceImagen.target = "_blank";

    const imagen = document.createElement("img");
    imagen.src = lista[i].imagen;
    imagen.classList.add("imagenSistemaOperativo");

    enlaceImagen.appendChild(imagen);
    div.appendChild(enlaceImagen);
    div.appendChild(nombre);

    divLibros.appendChild(div);
  }
}

crearSO(databaseSOJSON);

function buscadorDeNombreSO() {
    const nombreLeido = inputBuscadorSistemas.value.toLowerCase();
    divLibros.innerHTML = "";
  
    if (nombreLeido.trim() !== "") {
      const filtrados = databaseSOJSON.filter(SO => SO.nombre.toLowerCase().includes(nombreLeido));
      crearSO(filtrados);
    } else {
      crearSO(databaseSOJSON);
    }
  }
  
  
  