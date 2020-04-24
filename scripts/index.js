$(document).ready(function () {
    //tooltip
    $('[data-toggle="tooltip"]').tooltip()

    //hamburger animation
    $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function () {
        $(this).toggleClass('open');
    });

    // toggle mobile menu
    $('.sandwich').on('click', () => {
        if ($('.buttonArea').hasClass('animMenu')) {
            $('.buttonArea').toggleClass('animMenuClose')
        }
        else {
            $('.buttonArea').toggleClass('animMenu')
        }
    })

    // on clicking contact btn
    $('#contact_btn').click(() => {
        $('html,body').animate({ scrollTop: $('#contact').offset().top - 100 }, 'swing')
    })

    // autoscroll animation
    $('a[href*="#"]:not([href="#"])').click(function () {
        var target = $(this.hash);
        $('html,body').stop().animate({
            scrollTop: target.offset().top - 110
        }, 'linear');
    });
    if (location.hash) {
        var id = $(location.hash);
    }
    $(window).load(function () {
        if (location.hash) {
            $('html,body').animate({ scrollTop: id.offset().top - 100 }, 'swing')
        };
    });

});
