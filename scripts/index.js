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

    //text animation

    const text = document.querySelector('.fancy');
    const strText = text.textContent;
    const splitText = strText.split('');
    text.textContent = '';

    for (let i = 0; i < splitText.length; i++) {
        text.innerHTML += '<span>' + splitText[i] + '</span>'
    }
    let char = 0;
    let timer = setInterval(onTick, 50);

    function onTick() {
        const span = text.querySelectorAll('span')[char];
        span.classList.add('fade');
        char++

        if (char === splitText.length) {
            complete();
            return;
        }
    }

    function complete() {
        clearInterval(timer);
        timer = null;
    }

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
    $(window).on('load', function () {
        if (location.hash) {
            $('html,body').animate({ scrollTop: id.offset().top - 100 }, 'swing')
        };
    });

    //reload svg
    function loadingFunction() {
        var url = "media/L.svg?r=" + Math.random();
        $(".bigLetter>img").attr("src", url);
    }

    loadingFunction();

    //bounce
    $('.fade').on('hover', function () {
        $(this).toggleClass('bounce');
    })

});
