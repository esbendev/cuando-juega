var today = new Date();
// console.log(Object.keys(equipos[equipo]));
var fechasPosibles = Object.keys(equipos[equipo]);
for (var i = 0; i < fechasPosibles.length; i++) {
    var date = new Date(fechasPosibles[i]);
    console.log(date);
    if (date > today) {
        cargarDatosDeEquipo(equipos[equipo][fechasPosibles[i]], fechasPosibles[i]);
        break;
    }
}

function cargarDatosDeEquipo(datos, fecha) {
    // console.log(datos);
    // console.log(fecha);
    fecha.innerHTML = datos["fecha"];
    lugar.innerHTML = datos["lugar"]
    equipoLocal.innerHTML = datos["local"] ? equipo : datos["opponent"];
    equipoVisitante.innerHTML = datos["local"] ? datos["opponent"] : equipo;
}