// array de objetos con los datos
const perfiles = [
    {
        id: 1,
        nombre: "Lucas",
        ofrece: "Tutorías de C++ y lógica",
        busca: "Diseño UX/UI",
        nivel: "Avanzado"
    },
    {
        id: 2,
        nombre: "Martina",
        ofrece: "Maquetado web (HTML/CSS)",
        busca: "Uso avanzado de Git/Github",
        nivel: "Intermedio"
    },
    {
        id: 3,
        nombre: "Diego",
        ofrece: "Consultas SQL",
        busca: "Práctica de Inglés",
        nivel: "Basico"
    }
];

// capturamos el contenedor del HTML
const contenedorTarjetas = document.getElementById("contenedor-perfiles");

// función para renderizar dinámicamente
function renderizarCatalogo(arrayPerfiles){
    contenedorTarjetas.innerHTML = "";

    arrayPerfiles.forEach(perfil => {
        const tarjeta = document.createElement("article");
        tarjeta.classList.add("tarjeta-perfil");

        tarjeta.innerHTML = `
            <h3>${perfil.nombre}</h3>
            <p><strong>Ofrece:</strong> ${perfil.ofrece}</p>
            <p><strong>Busca:</strong> ${perfil.busca}</p>
            <p><strong>Nivel:</strong> ${perfil.nivel}</p>
            <button class="btn-guardar" data-id="${perfil.id}">Guardar Perfil</button>
        `;

        contenedorTarjetas.appendChild(tarjeta);
    });
}

// ejecutamos la función al cargar la página
// validamos que estemos en la pagina correcta para que no tire error en el index
if (contenedorTarjetas) {
    renderizarCatalogo(perfiles);
}