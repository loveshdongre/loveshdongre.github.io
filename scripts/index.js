//validation
function validateForm() {
    let name = $('#name').val();
    let subject = $('#subject').val();
    let message = $('#message').val();

    let error = '';
    var nameReg = new RegExp('[a-zA-Z0-9]');

    if (!nameReg.trim().test(name)) {
        error = "Name should contain only alphabets and numbers";
    }
    else if (!nameReg.trim().test(subject)) {
        error = 'Subject should contain only alphabets and numbers';
    }
    else if (message.trim().length == 0) {
        error = 'Message cannot be empty'
    }

    if (error !== '') {
        alert(error);
        return false;
    }

    return true;
}

$(document).ready(function () {

    //navhide on scroll
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
        var currentScrollpos = window.pageYOffset;
        if (prevScrollpos > currentScrollpos) {
            $('.mobileMenu').css('top', '0');
        }
        else {
            $('.mobileMenu').css('animation', 'unset')
            $('.mobileMenu').css('top', '-100%');
        }
        prevScrollpos = currentScrollpos;
    }

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
    $('.smoothScroll').click(function (e) {
        e.preventDefault();
        var target = $($(this).attr('data-href'));
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

    //sandwich icon
    $('.sandwich').on('click', function () {
        $(this).toggleClass('open')
    })


    //skillbar
    function skillBar() {
        obj = $('#resume').find('.skillBar');
        $.each(obj, function (key, value) {

            percentObj = $(value).find('.skillPercent');
            percentObj.addClass('fadeInPercent');
            percent = percentObj.text()

            $(value).css('width', percent)
        })

    }
    $(window).scroll(function () {
        var hT = $('#skills').offset().top - 300,
            hH = $('#skills').outerHeight(),
            wH = $(window).height(),
            wS = $(this).scrollTop();
        if (wS > (hT + hH - wH)) {
            skillBar();
        }
    });

    //hide dropdown
    $('.dropContent').hide(0)
    $('.skillDropdown>i').on('click', function () {

        $(this).toggleClass("fa-chevron-down fa-chevron-up");


        if ($(this).hasClass('fa-chevron-up')) {
            $(this).siblings('.dropContent').hide(200);
        }
        else {
            $(this).siblings('.dropContent').show(200);
        }

    })

});
