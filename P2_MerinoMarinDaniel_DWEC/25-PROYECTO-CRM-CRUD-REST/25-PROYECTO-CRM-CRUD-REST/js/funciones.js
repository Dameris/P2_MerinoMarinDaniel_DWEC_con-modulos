// Función para borrar un cliente
export function borrarCliente(db, clientId) {
    const transaction = db.transaction(["clientes"], "readwrite")
    const objectStore = transaction.objectStore("clientes")
    const request = objectStore.delete(clientId)

    request.onsuccess = function () {
        console.log("Cliente eliminado correctamente")
    }

    request.onerror = function (event) {
        console.error("Error al borrar el cliente:", event.target.error)
    }
}

// Función para mostrar los clientes en la interfaz (nuevocliente.js)
export function mostrarClientes(db) {
    if (!db) {
        console.error("La base de datos no está disponible.")
        return
    }

    // Inicia una transacción de solo lectura en el almacén de objetos "clientes"
    const transaction = db.transaction(["clientes"], "readonly")
    const objectStore = transaction.objectStore("clientes")
    const request = objectStore.getAll()

    request.onsuccess = function (event) {
        console.log("Clientes almacenados en la base de datos:")
        event.target.result.forEach(function (cliente) {
            console.log(cliente)
        })
    }
}