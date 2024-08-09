$(document).ready(function() {
    $('#mobile_btn').on('click', () => {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');
    })


    const sections = $('section');

    const navItems = $('.nav-item');

    $(window).on('scroll', () => {
        const header = $('header');

        let activeSectionIndex = 0;
        
        const scrollPosition = $(window).scrollTop()

        console.log(scrollPosition)

        if (scrollPosition <= 0) {
            header.css('box-shadow', 'none');
        } else {
            header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1)');
        }

        sections.each((i, e) => {
            const section = $(e);
            const sectionTop = section.offset().top - 96;
            const sectionBottom = sectionTop + section.outerHeight();
            if (scrollPosition >= sectionTop 
                && scrollPosition < sectionBottom) {
                activeSectionIndex = i;
                return false;
            }
        });

        navItems.removeClass('active')
        $(navItems[activeSectionIndex]).addClass('active');

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
    })

    ScrollReveal().reveal('.feedback', {
        origin: 'right',
        duration: 1000,
        distance: '20%'
    })
})