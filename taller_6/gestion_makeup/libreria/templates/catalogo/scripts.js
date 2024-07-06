document.addEventListener('DOMContentLoaded', function() {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const offcanvasMenu = document.getElementById('offcanvasMenu');
    const closeButton = offcanvasMenu.querySelector('.btn-close');

    function openMenu() {
        offcanvasMenu.classList.add('show');
    }

    function closeMenu() {
        offcanvasMenu.classList.remove('show');
    }

    navbarToggler.addEventListener('click', openMenu);
    closeButton.addEventListener('click', closeMenu);

    // Cerrar el menú cuando el mouse sale de él
    offcanvasMenu.addEventListener('mouseleave', closeMenu);

    // Prevenir que el menú se cierre cuando el mouse está sobre él
    offcanvasMenu.addEventListener('mouseenter', function() {
        clearTimeout(offcanvasMenu.closeTimer);
    });

    // Cerrar el menú al hacer clic fuera de él
    document.addEventListener('click', function(event) {
        const isClickInside = offcanvasMenu.contains(event.target) || navbarToggler.contains(event.target);
        if (!isClickInside && offcanvasMenu.classList.contains('show')) {
            closeMenu();
        }
    });

    // Validación del formulario de login
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        let isValid = true;
        const username = document.getElementById('username').value;
        const refCode = document.getElementById('ref_code').value;
        const password = document.getElementById('password').value;

        // Validar username
        if (username.length > 10) {
            document.getElementById('usernameError').textContent = 'El nombre de usuario no debe tener más de 10 caracteres';
            isValid = false;
        } else {
            document.getElementById('usernameError').textContent = '';
        }

        // Validar código de referencia
        if (refCode !== '2304') {
            document.getElementById('refCodeError').textContent = 'El código de referencia debe ser 2304';
            isValid = false;
        } else {
            document.getElementById('refCodeError').textContent = '';
        }

        // Validar contraseña
        if (password.length > 10) {
            document.getElementById('passwordError').textContent = 'La contraseña no debe tener más de 10 caracteres';
            isValid = false;
        } else {
            document.getElementById('passwordError').textContent = '';
        }

        if (isValid) {
            loginForm.submit();
        }
    });
});