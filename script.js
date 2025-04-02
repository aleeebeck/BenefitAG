function mostrarMensaje() {
    document.getElementById("mensaje").innerText = "¡Hola! Has hecho clic en el botón.";
}
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formContacto").addEventListener("submit", function(event) {
        event.preventDefault(); // Evita que la página se recargue

        // Capturar valores del formulario
        let nombre = document.getElementById("nombre").value;
        let email = document.getElementById("email").value;
        let mensaje = document.getElementById("mensaje").value;

        // Validación básica
        if (nombre === "" || email === "" || mensaje === "") {
            alert("Por favor, completa todos los campos.");
            return;
        }

        // Simular el envío de datos (esto debe conectarse a un backend en producción)
        console.log("Nombre:", nombre);
        console.log("Email:", email);
        console.log("Mensaje:", mensaje);

        // Mostrar mensaje de éxito
        document.getElementById("mensaje-exito").style.display = "block";

        // Limpiar formulario después de 2 segundos
        setTimeout(function() {
            document.getElementById("mensaje-exito").style.display = "none";
            document.getElementById("formContacto").reset();
        }, 2000);
    });
});