//EL CONTROLADOR ES EL ENCARGADO
//DE ADMINISTRAR LAS PETICIONES Y RESPUESTAS

const { request, response } = require('express')

//crear una funcion para cada operacion del servidor

function registrarJugador(peticion = request, respuesta = response) {

    //nombre // edad // posicion //dorsal // equipo
    let datosPeticion=peticion.body

    respuesta.json({
        mensaje: "estoy registrando un jugador",
        datos:datosPeticion
    })

}

function buscarJugador(peticion = request, respuesta = response) {

    //recibir el id a buscar
    let id=peticion.params.id

    let datosPeticion=peticion.body

    respuesta.json({
        mensaje: "estoy buscando un jugador "+id
    })

}

function buscarJugadores(peticion = request, respuesta = response) {

    respuesta.json({
        mensaje: "estoy buscando todos los jugadores"
    })

}

function editarJugador(peticion = request, respuesta = response) {


     //recibir el id a editar
     let id=peticion.params.id

     let datosPeticion=peticion.body


    respuesta.json({
        mensaje: "estoy editando un jugador"
    })

}

function eliminarJugador(peticion = request, respuesta = response) {

     //recibir el id a eliminar
     let id=peticion.params.id


    respuesta.json({
        mensaje: "estoy eliminando un jugador"
    })

}

module.exports = {

    registrarJugador,
    buscarJugador,
    buscarJugadores,
    editarJugador,
    eliminarJugador

}