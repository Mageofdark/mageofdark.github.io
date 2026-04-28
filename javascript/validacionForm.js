$(document).ready(function () {

    const form = $('form.needs-validation');

    // 1_ VALIDACIÓN AL SUBMIT
    form.on('submit', function (e) {

        if (!this.checkValidity()) {
            e.preventDefault();
            e.stopPropagation();
        }

        $(this).addClass('was-validated');
    });

    // =========================
    // 2. VALIDACIÓN EN TIEMPO REAL
    // =========================

    // Nombre completo
    $('#nombreCompleto').on('input', function () {
        const value = $(this).val().trim();

        if(value.length === 0){
            $(this).removeClass('is-valid is-invalid');
            return;
        }

        const valid = value.length >= 3;

        $(this).toggleClass('is-valid', valid);
        $(this).toggleClass('is-invalid', !valid);
    });

    // Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    $('#email').on('input', function () {
        const value = $(this).val().trim();

        if(value.length === 0){
            $(this).removeClass('is-valid is-invalid');
            return;
        }

        const valid = emailRegex.test(value);

        $(this).toggleClass('is-valid', valid);
        $(this).toggleClass('is-invalid', !valid);
    });

    // Teléfono (simple)
    $('#numeroTelefono').on('input', function () {
        const value = $(this).val().trim();

        if(value.length === 0){
            $(this).removeClass('is-valid is-invalid');
            return;
        }

        const valid = value.length >= 8;

        $(this).toggleClass('is-valid', valid);
        $(this).toggleClass('is-invalid', !valid);
    });

    // Fechas (lógica básica)
    $('#fechaDeLlegada, #fechaDeSalida').on('change', function () {

        const llegada = new Date($('#fechaDeLlegada').val());
        const salida = new Date($('#fechaDeSalida').val());

        if (!isNaN(llegada) && !isNaN(salida)) {
            const valid = salida >= llegada;

            $('#fechaDeLlegada, #fechaDeSalida')
                .toggleClass('is-valid', valid)
                .toggleClass('is-invalid', !valid);
        }
    });

    // Mensaje
    $('#mensaje').on('input', function () {
        const value = $(this).val().trim();

        if(value.length === 0){
            $(this).removeClass('is-valid is-invalid');
            return;
        }

        const valid = value.length >= 15;

        $(this).toggleClass('is-valid', valid);
        $(this).toggleClass('is-invalid', !valid);
    });

});