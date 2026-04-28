$(document).ready(function () {

    // REFERENCIAS DOM
    const $form = $('form.needs-validation');
    const $btn = $('#submitBtn');
    const $text = $btn.find('.btn-text');
    const $spinner = $btn.find('.spinner-border');

    // 1_ VALIDACIÓN AL SUBMIT
    $form.on('submit', function (e) {

        const form = this;

        e.preventDefault();
        e.stopPropagation();

        if (!form.checkValidity()) {
            $(form).addClass('was-validated');
            return;
        }

        $(form).addClass('was-validated');

        // =========================
        // SPINNER ON
        // =========================
        $btn.prop('disabled', true);
        $text.addClass('d-none');
        $spinner.removeClass('d-none');

        setTimeout(() => {

            // =========================
            // RESET FORM
            // =========================
            form.reset();
            $(form).removeClass('was-validated');

            // =========================
            // SPINNER OFF
            // =========================
            $btn.prop('disabled', false);
            $text.removeClass('d-none');
            $spinner.addClass('d-none');

            // =========================
            // MODAL SUCCESS
            // =========================
            const modal = new bootstrap.Modal(
                document.getElementById('successModal')
            );

            modal.show();

        }, 1500);
    });

    // $form.on('submit', function (e) {

    //     if (!this.checkValidity()) {
    //         e.preventDefault();
    //         e.stopPropagation();
    //     }

    //     $(this).addClass('was-validated');
    // });


    // 2. VALIDACIÓN EN TIEMPO REAL

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
    const phoneRegex = /^[0-9+\s-]{8,15}$/;

    $('#numeroTelefono').on('input', function () {
        const value = $(this).val().trim();

        if (value.length === 0) {
            $(this).removeClass('is-valid is-invalid');
            return;
        }

        const valid = phoneRegex.test(value);

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