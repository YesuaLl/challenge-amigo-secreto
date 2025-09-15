// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Se crea un array para almacenar los nombres
let amigos = [];

// Imprementacion  de funcion para agrgar amigos
function agregarAmigo() {
    //Se toma el valor de imput
    let inputAmigo = document.getElementById('amigo').value.trim();

    //Validacion
    if (inputAmigo === '') {
        alert('Por favor, inserte su nombre');
        return;
    }
    //Se agrega al array
    amigos.push(inputAmigo);

    //limpia
    document.getElementById('amigo').value = "";
    
    mostrarLista();
}

function mostrarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // limpiar lista

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}