console.log("Hola mundo")

const ranking = document.querySelector("#ranking")

function pintaTabla() {
    const partidas = document.querySelector("#partidas");
    let tablaHTML = `<h2 class="text-center text-light">Partidas</h2>
        <div class="input-group mb-3">
            <input
                type="text"
                class="form-control"
                placeholder="Buscador"
                aria-label="Buscador"
                aria-describedby="button-addon2"
            />
            <button
                class="btn btn-outline-secondary"
                type="button"
                id="button-addon2"
            >
                <i class="bi bi-x-lg"></i>
            </button>
        </div>
        <table class="table table-dark">
            <thead>
                <tr>
                    <td></td>
                    <td>Nick <i class="bi bi-arrow-up-square"></i></td>
                    <td>Puntuación <i class="bi bi-arrow-up-square"></i></td>
                    <td>Fecha <i class="bi bi-arrow-up-square"></i></td>
                </tr>
            </thead>
            <tbody>`;

    partides.forEach(partida => {
        tablaHTML += `
            <tr>
                <td><img src="${partida.avatar}" alt="avatar" /></td>
                <td>${partida.nick}</td>
                <td>${partida.puntos}</td>
                <td>${partida.fecha}</td>
            </tr>`;
});

    tablaHTML += `</tbody>
        <tfoot></tfoot>
    </table>`;

    partidas.innerHTML = tablaHTML;

    console.log(partidas.innerHTML);
}

const partides = [
    {
        avatar: "./img/account-avatar-profile-user-3-svgrepo-com.svg",
        nick: 'Raul',
        puntos: '1000',
        fecha: "1 JUNIO 2023"
    },
    {
        avatar: "./img/account-avatar-profile-user-13-svgrepo-com.svg",
        nick: 'Rodri',
        puntos: '400',
        fecha: "1 Enero 2004"
    },
    {
        avatar: "./img/account-avatar-profile-user-14-svgrepo-com.svg",
        nick: 'Pau',
        puntos: '10',
        fecha: "1 MAYO 2000"
    }
];

const datosEjemploPartida = {
    avatar:'https://www.svgrepo.com/show/384672/account-avatar-profile-user-7.svg',
    nick: 'MANUEL' ,
    puntos: 100 ,
    fecha:'21 MAYO 2023' 
}
    

function insertaNuevaPartida(datosEjemploPartida){
    console.log("Guardando partida", datosEjemploPartida)
    partides.push(datosEjemploPartida)
    console.log("Array actualizado",partides)
}

function pintaDatosPartida(datosEjemploPartida){
    const confirmacion = confirm("¿Quieres guardar la partida?")

    if(confirmacion){
        insertaNuevaPartida(datosEjemploPartida)
        pintaTabla(datosEjemploPartida)
    }
} 


pintaTabla(partides);
pintaDatosPartida(datosEjemploPartida)
// insertaNuevaPartida(datosEjemploPartida)

