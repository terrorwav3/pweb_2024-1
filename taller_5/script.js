$(document).ready(function () {
    // Navegación del menú
    $('#menu_inicio').click(function () {
        $('section').hide();
        $('#inicio').show();
    });

    $('#menu_registro').click(function () {
        $('section').hide();
        $('#registro_usuarios').show();
    });

    $('#menu_grilla').click(function () {
        $('section').hide();
        $('#grilla_jQ').show();
    });

    // Mostrar la sección de inicio al cargar la página
    $('#inicio').show();

    // Cálculo de la edad
    $('#fecha_nacimiento').on('change', function () {
        const fechaNacimiento = new Date($(this).val());
        const hoy = new Date();
        let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
        const mes = hoy.getMonth() - fechaNacimiento.getMonth();
        if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
            edad--;
        }
        $('#edad').text('Edad: ' + edad + ' años');
    });

    // Validación de usuario
    $('#usuario').on('input', function () {
        const regex = /^[a-zA-Z0-9_]+$/;
        if (!regex.test($(this).val())) {
            alert('El nombre de usuario solo debe contener letras, números y guiones bajos.');
            $(this).val('');
        }
    });

    // Validación de contraseñas
    $('#registro_f').on('submit', function (e) {
        const password = $('#contrasena').val();
        const confirmPassword = $('#confir_contrasena').val();
        if (password !== confirmPassword) {
            alert('Las contraseñas no coinciden.');
            e.preventDefault();
        }
    });

    // Mostrar campos adicionales
    $('#enfermedades').on('change', function () {
        if ($(this).val() === 'si') {
            $('#detalles-enfermedades').show();
        } else {
            $('#detalles-enfermedades').hide();
            $('#enfermedades-contagiosas').val('');
        }
    });

    // Cargar datos en la grilla y filtrado
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/users',
        method: 'GET',
        success: function (data) {
            const $tbody = $('#tabla-datos tbody');
            data.forEach(user => {
                const address = `${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`;
                const company = user.company.name;
                $tbody.append(`
                    <tr>
                        <td>${user.id}</td>
                        <td>${user.name}</td>
                        <td>${user.username}</td>
                        <td>${user.email}</td>
                        <td>${user.phone}</td>
                        <td>${address}</td>
                        <td>${company}</td>
                        <td>${user.website}</td>
                    </tr>
                `);
            });

            $('#filtro').on('input', function () {
                const filtro = $(this).val().toLowerCase();
                $('#tabla-datos tbody tr').filter(function () {
                    $(this).toggle($(this).text().toLowerCase().indexOf(filtro) > -1);
                });
            });
        },
        error: function (error) {
            alert('Error al cargar los datos.');
        }
    });
});
