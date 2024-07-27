$(document).ready(function () {
    const secoes = $('section');
    const itensNav = $('.nav-item');
    const alturaCabecalho = $('header').outerHeight();

    function ItemNavAtivo() {
        const posicaoScroll = $(window).scrollTop() + alturaCabecalho + 1;

        let indiceSecaoAtiva = 0;

        secoes.each(function (i) {
            const secao = $(this);
            const topoSecao = secao.offset().top;
            const fundoSecao = topoSecao + secao.outerHeight();

            if (posicaoScroll >= topoSecao && posicaoScroll < fundoSecao) {
                indiceSecaoAtiva = i;
                return false;
            }
        });

        itensNav.removeClass('active');
        $(itensNav[indiceSecaoAtiva]).addClass('active');
    }

    function CliqueItemNav(e) {
        e.preventDefault();
        const idAlvo = $(this).find('a').attr('href');
        const posicaoAlvo = $(idAlvo).offset().top - alturaCabecalho;

        $('html, body').animate({
            scrollTop: posicaoAlvo
        }, 80);

        itensNav.removeClass('active');
        $(this).addClass('active');
    }

    function inicializarMenuMobile() {
        $('#mobile_btn').on('click', function () {
            $('#mobile_menu').toggleClass('active');
            $('#mobile_btn').find('i').toggleClass('fa-x');
        });
    }

    function inicializarScrollReveal() {
        ScrollReveal().reveal('#cta', {
            origin: 'left',
            duration: 2000,
            distance: '10%'
        });

        ScrollReveal().reveal('.dish', {
            origin: 'left',
            duration: 2000,
            distance: '10%'
        });

        ScrollReveal().reveal('#testimonial_chef', {
            origin: 'left',
            duration: 2000,
            distance: '10%'
        });

        ScrollReveal().reveal('.feedback', {
            origin: 'right',
            duration: 1000,
            distance: '10%'
        });

        ScrollReveal().reveal('.service', {
            origin: 'right',
            duration: 1000,
            distance: '5%'
        });

        ScrollReveal().reveal('#banner', {
            origin: 'top',
            duration: 2000,
            distance: '15%'
        });

        ScrollReveal().reveal('.shape', {
            origin: 'right',
            duration: 1000,
            distance: '10%'
        });

        ScrollReveal().reveal('input', {
            origin: 'left',
            duration: 1000,
            distance: '5%'
        });

        ScrollReveal().reveal('textarea ', {
            origin: 'left',
            duration: 1000,
            distance: '5%'
        });

        ScrollReveal().reveal('label', {
            origin: 'left',
            duration: 1250,
            distance: '5%'
        });

        ScrollReveal().reveal('button', {
            origin: 'left',
            duration: 1000,
            distance: '20%'
        });

    }

    function inicializar() {
        inicializarMenuMobile();
        inicializarScrollReveal();

        $(window).on('scroll', ItemNavAtivo);
        itensNav.on('click', CliqueItemNav);
    }

    inicializar();
});

document.getElementById('formContact').addEventListener('submit', function (event) {
    event.preventDefault();

    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let numero = document.getElementById('numero').value;
    let mensagem = document.getElementById('mensagem').value;
    let mensagemEnviada = document.getElementById('mensagemEnviada');

    let hasError = false;

    if (nome === '') {
        document.getElementById('nomeError').style.display = 'block';
        hasError = true;
    } else {
        document.getElementById('nomeError').style.display = 'none';
    }

    if (email === '') {
        document.getElementById('emailError').style.display = 'block';
        hasError = true;
    } else {
        document.getElementById('emailError').style.display = 'none';
    }

    if (numero === '') {
        document.getElementById('numeroError').style.display = 'block';
        hasError = true;
    } else {
        document.getElementById('numeroError').style.display = 'none';
    }

    if (mensagem === '') {
        document.getElementById('mensagemError').style.display = 'block';
        hasError = true;
    } else {
        document.getElementById('mensagemError').style.display = 'none';
    }

    if (!hasError) {
        mensagemEnviada.style.display = 'block';
        setTimeout(function () {
            mensagemEnviada.style.display = 'none';
            document.getElementById('formContact').submit();
        }, 2000);
    }
});
$(document).ready(function () {
    var ultimaPosicaoScroll = 0;
    $(window).scroll(function (event) {
        var posicaoScrollAtual = $(this).scrollTop();
        if (posicaoScrollAtual > ultimaPosicaoScroll) {
            $('#header').addClass('hidden');
        } else {
            $('#header').removeClass('hidden');
        }
        ultimaPosicaoScroll = posicaoScrollAtual;
    });
});

