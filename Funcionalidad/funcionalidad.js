function agregarNombre(){
    let nombre = document.getElementById("idNombre").value;
    //nombre=nombre.charAt(0).toUpperCase().slice(1);
    let apellido = document.getElementById("idApellido").value;
    var lista = document.getElementById("lista");
    var nuevoElemento = document.createElement("li");
    nuevoElemento.textContent = nombre+" "+ apellido;
    lista.appendChild(nuevoElemento);
    
}