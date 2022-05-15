var socket = io();

// Escuchar (on)
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Conexión perdida');
});

// Enviar informacion (emit)
socket.emit('enviarMensaje', {
        usuario: 'Abel',
        mensaje: 'Hola desde el lado del cliente'
    },
    function(resp) {
        console.log('respuesta del servidor: ', resp);
    });

// Escuchar informacion
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor: ', mensaje);
});