$(document).ready(function () {
    $('#carousel-imagens').slick({
        autoplay: true
    });
    $('.menu-hamburguer').click(function () {
        $('nav').slideToggle();
    });

    $('#telefone').mask('(00) 00000-0000');

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
                required: true,
            },
            'veiculo-interesse': {
                required: false
            },
            mensagem: {
                required: true
            }
        },
        messages: {
            nome: {
                required: 'O campo nome é obrigatório'
            },
            telefone: {
                required: 'O campo telefone é obrigatório'
            },
            email: {
                required: 'O campo e-mail é obrigatório',
                email: 'Digite um e-mail válido'
            },
            mensagem: {
                required: 'O campo mensagem é obrigatório'
            }
        },
        submitHandler: function (form) {
            console.log(form);
        },
        invalidHandler: function (event, validator) {
            let camposIncorretos = validator.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`);
            }
        }
    });

    $('.lista-veiculos button').click(function () {
        const destino = $('#contato');
        const nomeVeiculo = $(this).parent().find('h3').text();

        $('#veiculo-interesse').val(nomeVeiculo);
    
        $('html, body').animate({
            scrollTop: destino.offset().top
        }, 1000);
    });
});  
