document.addEventListener('DOMContentLoaded', () => {
    const nameInput = document.getElementById('nameInput');
    const nameError = document.getElementById('nameError');

    nameInput.addEventListener('input', () => {
        if (nameInput.value.length >= 25) {
            nameError.textContent = 'Por favor ingrese un máximo de 25 caracteres.'; // Mensaje de advertencia para Nombre
        } else {
            nameError.textContent = ''; // Limpiar advertencia
        }
    });

    const apellidoInput = document.getElementById('apellidoInput');
    const apellidoError = document.getElementById('apellidoError');

    apellidoInput.addEventListener('input', () => {
        if (apellidoInput.value.length >= 25) {
            apellidoError.textContent = 'Por favor ingrese un máximo de 25 caracteres.'; // Mensaje de advertencia para Apellido
        } else {
            apellidoError.textContent = ''; // Limpiar advertencia
        }
    });
    const direccionInput = document.getElementById('direccionInput');
    const direccionError = document.getElementById('direccionError');

    // Lista de palabras clave permitidas al inicio
    const palabrasPermitidas = ['cll', 'cra', 'av', 'anv', 'trans'];

    direccionInput.addEventListener('input', () => {
        // Extrae la primera palabra ingresada
        const primeraPalabra = direccionInput.value.split(' ')[0].toLowerCase();

        // Verifica si la primera palabra está en la lista de palabras permitidas
        if (palabrasPermitidas.includes(primeraPalabra)) {
            direccionError.textContent = ''; // Si es válido, no muestra error
        } else {
            direccionError.textContent = 'La dirección debe comenzar con cll, cra, av, anv o trans.'; // Si no es válido, muestra el mensaje de error
        }
    });

    // Para el campo de "Usuario"
    const usuarioInput = document.getElementById('usuarioInput');
    const usuarioError = document.getElementById('usuarioError');

    // Expresión regular para solo permitir letras y números
    const usuarioRegex = /^[a-zA-Z0-9]*$/; // Renombrado para evitar conflictos

    usuarioInput.addEventListener('input', () => {
        const length = usuarioInput.value.length;

        if (length < 10) {
            usuarioError.textContent = 'El usuario debe tener al menos 10 caracteres.';
        } else if (length > 20) {
            usuarioError.textContent = 'El usuario no debe exceder 20 caracteres.';
        } else if (!usuarioRegex.test(usuarioInput.value)) {
            usuarioError.textContent = 'El usuario solo debe contener letras y números.';
        } else {
            usuarioError.textContent = ''; // Limpiar el mensaje de error si es válido
        }
    });

    // Para el campo de "Contraseña"
    const contrasenaInput = document.getElementById('contrasenaInput');
    const contrasenaError = document.getElementById('contrasenaError');
    const confirmarContrasenaInput = document.getElementById('confirmarContrasenaInput');
    const confirmarContrasenaError = document.getElementById('confirmarContrasenaError');

    // Expresión regular para validar los requisitos de la contraseña
    const contrasenaRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[a-z])(?=.*[#%/&])[a-zA-Z\d#%/&]{15,20}$/; // Renombrado para evitar conflictos

    contrasenaInput.addEventListener('input', () => {
        const isValid = contrasenaRegex.test(contrasenaInput.value);

        if (!isValid) {
            contrasenaError.textContent = 'La contraseña debe tener entre 15 y 20 caracteres, con mayúsculas, números, letras, y al menos uno de estos caracteres: #, %, /, &.';
        } else {
            contrasenaError.textContent = ''; // Limpiar el mensaje de error si es válido
        }

        if (contrasenaInput.value !== confirmarContrasenaInput.value) {
            confirmarContrasenaError.textContent = 'Las contraseñas no coinciden.';
        } else {
            confirmarContrasenaError.textContent = ''; // Limpiar mensaje si coinciden
        }
    });

    confirmarContrasenaInput.addEventListener('input', () => {
        if (contrasenaInput.value !== confirmarContrasenaInput.value) {
            confirmarContrasenaError.textContent = 'Las contraseñas no coinciden.';
        } else {
            confirmarContrasenaError.textContent = ''; // Limpiar mensaje si coinciden
        }
    });

    const emailInput = document.getElementById('emailInput');
    const emailError = document.getElementById('emailError');

    emailInput.addEventListener('input', () => {
        if (emailInput.value.length >= 120) {
            emailError.textContent = 'Por favor ingrese un máximo de 120 caracteres.'; // Mensaje de advertencia para Nombre
        } else {
            emailError.textContent = ''; // Limpiar advertencia
        }
    });
  
        const siRadio = document.getElementById('si');
        const noRadio = document.getElementById('no');
        const seccionGustos = document.getElementById('seccionGustos');
        const rangoPrecio = document.getElementById('rangoPrecio');
        const rangoPrecioValor = document.getElementById('rangoPrecioValor');
      
        // Mostrar u ocultar la sección de gustos según el radio seleccionado
        const toggleGustos = () => {
          if (siRadio.checked) {
            seccionGustos.classList.remove('hidden'); // Mostrar la sección
          } else {
            seccionGustos.classList.add('hidden'); // Ocultar la sección
          }
        };
      
        siRadio.addEventListener('change', toggleGustos);
        noRadio.addEventListener('change', toggleGustos);
      
        // Actualizar el valor del rango a medida que se mueve
        rangoPrecio.addEventListener('input', () => {
          rangoPrecioValor.textContent = rangoPrecio.value; // Mostrar el valor actual del rango
        });
    });
    // Inicializar la visibilidad de la sección de gustos
    toggleGustos();




