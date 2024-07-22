$(document).ready(function() {
    const secoes = $('section');
    const itensNav = $('.nav-item');
    const alturaCabecalho = $('header').outerHeight();

    function ItemNavAtivo() {
        const posicaoScroll = $(window).scrollTop() + alturaCabecalho + 1;

        let indiceSecaoAtiva = 0;

        secoes.each(function(i) {
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
            distance: '20%'
        });

        ScrollReveal().reveal('.dish', {
            origin: 'left',
            duration: 2000,
            distance: '20%'
        });

        ScrollReveal().reveal('#testimonial_chef', {
            origin: 'left',
            duration: 1000,
            distance: '20%'
        });

        ScrollReveal().reveal('.feedback', {
            origin: 'right',
            duration: 1000,
            distance: '20%'
        });

        ScrollReveal().reveal('.service', {
            origin: 'right',
            duration: 1000,
            distance: '20%'
        });

        ScrollReveal().reveal('#banner', {
            origin: 'top',
            duration: 2000,
            distance: '30%'
        });

        ScrollReveal().reveal('.shape', {
            origin: 'right',
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
/*
let index = 0;
const slides = document.querySelectorAll('.di1sh');
const totalSlides = slides.length;

function showSlide(n) {
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${(i - n) * 100}%)`;
    });
}

function nextSlide() {
    index = (index + 1) % totalSlides;
    showSlide(index);
}

setInterval(nextSlide, 2000); 

showSlide(index);*/

