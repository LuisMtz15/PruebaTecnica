function validarNumero(input) {
    var valor = input.value;
    if (valor.trim() === '') {
        input.value = '';
    } else {
        var valorNumerico = valor.replace(/\D/g, '');
        input.value = valorNumerico;
    }
}