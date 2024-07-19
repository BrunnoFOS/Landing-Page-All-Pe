$(document).ready(function() {
    $('#mobile_btn').on('click', function () {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');
    });

    const sections = $('section');
    const navItems = $('.nav-item');
    const headerHeight = $('header').outerHeight();

    function updateActiveNavItem() {
        const scrollPosition = $(window).scrollTop() + headerHeight + 1;

        let activeSectionIndex = 0;

        sections.each(function(i) {
            const section = $(this);
            const sectionTop = section.offset().top;
            const sectionBottom = sectionTop + section.outerHeight();

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                activeSectionIndex = i;
                return false;
            }
        });

        navItems.removeClass('active');
        $(navItems[activeSectionIndex]).addClass('active');
    }

    $(window).on('scroll', updateActiveNavItem);

    navItems.on('click', function(e) {
        e.preventDefault();
        const targetId = $(this).find('a').attr('href');
        const targetPosition = $(targetId).offset().top - headerHeight;

        $('html, body').animate({
            scrollTop: targetPosition
        }, 80);

        navItems.removeClass('active');
        $(this).addClass('active');
    });

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
});

