import { openDataBase, mostrarClientes, borrarCliente } from "./funciones.js"

document.addEventListener("DOMContentLoaded", () => {
    const dbName = "Clientes"
    const dbVersion = 1

    // Constante para obtener el listado de los clientes
    const listadoClientes = document.getElementById("listado-clientes")

    // Abrir base de datos y mostrar y borrar clientes
    openDataBase(dbName, dbVersion)
        .then((db) => mostrarClientes(db, listadoClientes))
        .then((clienteId) => borrarCliente(db, clienteId))
        .catch((error) => console.error(error))
})