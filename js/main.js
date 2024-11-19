$(document).ready(function () {
    $('#carousel-imagens').slick({
        autoplay: true, 
    });

    $('.menu-hamburguer').click(function() {
        $('nav').slideToggle();
    });

    $('#telefone').mask('(00) 00000-0000')
    $('#cpf').mask('000.000.000-00')
    $('#cep').mask('00000-000')

$('form').validate({
    rules: {
        nome: {
            required: true
        },
        email: {
            required: true,
            email: true
        },
        telefone: {
            required: true
        },
        cpf: {
            required: true
        },
        endereco: {
            required: true
        },
        cep: {
            required: true
        }
    },
    messages: {
        nome: 'Por favor insira seu nome',
        email: 'Por favor, insira um e-mail válido',
        telefone: 'Por favor, insira um telefone válido',
        cpf: 'Por favor, insira um CPF válido',
        endereco: 'Por favor, insira seu endereço',
        cep: 'Por favor, insira um CEP válido',
    },

    submitHandler: function(form) {
        alert(`Sua requisição foi enviada para análise, parabéns pela aquisição!`);
        form.reset();
    },
    invalidHandler: function(evento, validador) {
        alert(`Por favor, preencha os campos para prosseguir com a compra!`);
    },
})
})