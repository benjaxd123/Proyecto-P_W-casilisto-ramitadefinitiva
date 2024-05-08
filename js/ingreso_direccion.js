
document.getElementById('checkout-form').addEventListener('submit', function(event) {
    var nombre = document.getElementById('nombre-cliente').value.trim();
    var apellido = document.getElementById('apellido-cliente').value.trim();
    var region = document.getElementById('region').value.trim();
    var comuna = document.getElementById('comuna').value.trim();
    var calle = document.getElementById('calle').value.trim();
    var direccion = document.getElementById('direccion').value.trim();
    var errorMessage = '';

    if (nombre === '') {
        errorMessage += 'Por favor ingresa tu nombre.\n';
    }

    if (apellido === '') {
        errorMessage += 'Por favor ingresa tu apellido.\n';
    }

    if (region === '') {
        errorMessage += 'Por favor ingresa tu region\n';
    }

    if (comuna === '') {
        errorMessage += 'Por favor ingresa tu comuna.\n';
    }

    if (calle === '') {
        errorMessage += 'Por favor ingresa tu calle.\n';
    }

    if (direccion === '') {
        errorMessage += 'Por favor ingresa tu dirección.\n';
    }

    if (errorMessage !== '') {
        event.preventDefault(); // Evita que se envíe el formulario
        document.getElementById('error-message').textContent = errorMessage;
    }else {
        // Si no hay errores, redirige al usuario a metododepago.html
        window.location.href = "metododepago.html";
    }


     
});