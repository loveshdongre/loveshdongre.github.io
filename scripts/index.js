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
    // var prevScrollpos = window.pageYOffset;
    // window.onscroll = function () {
    //     var currentScrollpos = window.pageYOffset;
    //     if (prevScrollpos > currentScrollpos) {
    //         $('.mobileMenu').css('top', '0');
    //     }
    //     else if (prevScrollpos < currentScrollpos) {
    //         $('.mobileMenu').css('animation', 'unset')
    //         $('.mobileMenu').css('top', '-100%');
    //     }
    //     prevScrollpos = currentScrollpos;
    // }

    //tooltip
    $('[data-toggle="tooltip"]').tooltip()

    // toggle mobile menu
    $('.sandwich').on('click', () => {
        if ($('.buttonArea').hasClass('animMenu')) {
            $('.buttonArea').toggleClass('animMenuClose')
        }
        else {
            $('.buttonArea').toggleClass('animMenu')
        }
    })

    // on scroll automatically menu if open
    $(document).on('scroll', () => {
        if ($('.sandwich').hasClass('open')) {
            $('.sandwich').click();
        }
    });

    // on clicking contact btn
    $('#contact_btn').click(() => {
        $('html,body').animate({ scrollTop: $('#contact').offset().top - 100 }, 'swing')
    })

    // on clicking downloadcv btn
    $('#downloadCV').click(() => {
        // window.open('/media/Lovesh Resume -19April2020.pdf');
        const file_path = '/media/Lovesh Dongre Resume.pdf';
        const a = document.createElement('A');
        a.href = file_path;
        a.download = file_path.substr(file_path.lastIndexOf('/') + 1);
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
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


    loadingFunction();

    //sandwich icon
    $('.sandwich').on('click', function () {
        $(this).toggleClass('open')
    })


    //skillbar on scroll
    function skillBar() {
        obj = $('#resume').find('.skillBar');

        $('.skillName').addClass('fadeInPercent');
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

        if ($(this).hasClass('fa-chevron-down')) {
            $(this).siblings('.dropContent').hide(200);
        }
        else {
            $(this).siblings('.dropContent').show(200);
        }

    })

    //show all / hide all
    $('.skillControls>.skillToggle').click(function () {
        $(this).toggleClass("fa-angle-double-down fa-angle-double-up");
        $('.skillDropdown>i').toggleClass("fa-chevron-down fa-chevron-up");
        $('.skillDropdown > i').removeClass("fa-chevron-down fa-chevron-up");

        if ($(this).hasClass('fa-angle-double-down')) {
            $('.skillDropdown>i').toggleClass("fa-chevron-down");
            $('.dropContent').hide(200);
        }
        else {

            $('.skillDropdown>i').toggleClass("fa-chevron-up");
            $('.dropContent').show(200);
        }

    })

    //project filter
    $(".filter-button").click(function () {
        var value = $(this).attr('data-filter');
        $('.filter-button').removeClass('active_tab');
        $(this).addClass('active_tab');
        if (value == "all") {
            $('.filter').show(200);
        }
        else {
            $(".filter").not('.' + value).hide(200);
            $('.filter').filter('.' + value).show(200);
        }
    });

    if ($(".filter-button").removeClass("active")) {
        $(this).removeClass("active");
    }
    $(this).addClass("active");

    function setIdCardActive(card_data_id) {
        if(card_data_id == null)
            return;
        card_data_id = parseInt(card_data_id);
        let par = $('#idcard-container');
        let children = par.children();
        for(let i = 0; i < children.length; i++) {
            $(children[i]).hide();
            if (i == card_data_id) {
                $(children[i]).show();
            }
        }

        let expPar = $('#exp-list');
        let expChildren = expPar.children();
        for(let i = 0; i < expChildren.length; i++) {
            $(expChildren[i]).removeClass('setExpTileActive');
            if(i == card_data_id) {
                $(expChildren[i]).addClass('setExpTileActive');
            }
        }
    }
    setIdCardActive(0)
    
    $('.tile').on('click', function() {
        let id = $(this).attr('data-id');
        setIdCardActive(id);
    })

});

// Id card effect: https://codepen.io/robin-dela/pen/jVddbq
function atvImg(){
	var d = document,
		de = d.documentElement,
		bd = d.getElementsByTagName('body')[0],
		htm = d.getElementsByTagName('html')[0],
		win = window,
		imgs = d.querySelectorAll('.atvImg'),
		totalImgs = imgs.length,
		supportsTouch = 'ontouchstart' in win || navigator.msMaxTouchPoints;

	if(totalImgs <= 0){
		return;
	}

	for(var l=0;l<totalImgs;l++){

		var thisImg = imgs[l],
			layerElems = thisImg.querySelectorAll('.atvImg-layer'),
			totalLayerElems = layerElems.length;

		if(totalLayerElems <= 0){
			continue;
		}

		while(thisImg.firstChild) {
			thisImg.removeChild(thisImg.firstChild);
		}
	
		var containerHTML = d.createElement('div'),
			shineHTML = d.createElement('div'),
			shadowHTML = d.createElement('div'),
			layersHTML = d.createElement('div'),
			layers = [];

		thisImg.id = 'atvImg__'+l;
		containerHTML.className = 'atvImg-container';
		shineHTML.className = 'atvImg-shine';
		shadowHTML.className = 'atvImg-shadow';
		layersHTML.className = 'atvImg-layers';

		for(var i=0;i<totalLayerElems;i++){
			var layer = d.createElement('div'),
				imgSrc = layerElems[i].getAttribute('data-img');

			layer.className = 'atvImg-rendered-layer';
			layer.setAttribute('data-layer',i);
			layer.style.backgroundImage = 'url('+imgSrc+')';
			layersHTML.appendChild(layer);

			layers.push(layer);
		}

		containerHTML.appendChild(shadowHTML);
		containerHTML.appendChild(layersHTML);
		containerHTML.appendChild(shineHTML);
		thisImg.appendChild(containerHTML);

		var w = thisImg.clientWidth || thisImg.offsetWidth || thisImg.scrollWidth;
		thisImg.style.transform = 'perspective('+ w*3 +'px)';

		if(supportsTouch){
			win.preventScroll = false;

	        (function(_thisImg,_layers,_totalLayers,_shine) {
				thisImg.addEventListener('touchmove', function(e){
					if (win.preventScroll){
						e.preventDefault();
					}
					processMovement(e,true,_thisImg,_layers,_totalLayers,_shine);		
				});
	            thisImg.addEventListener('touchstart', function(e){
	            	win.preventScroll = true;
					processEnter(e,_thisImg);		
				});
				thisImg.addEventListener('touchend', function(e){
					win.preventScroll = false;
					processExit(e,_thisImg,_layers,_totalLayers,_shine);		
				});
	        })(thisImg,layers,totalLayerElems,shineHTML);
	    } else {
	    	(function(_thisImg,_layers,_totalLayers,_shine) {
				thisImg.addEventListener('mousemove', function(e){
					processMovement(e,false,_thisImg,_layers,_totalLayers,_shine);		
				});
	            thisImg.addEventListener('mouseenter', function(e){
					processEnter(e,_thisImg);		
				});
				thisImg.addEventListener('mouseleave', function(e){
					processExit(e,_thisImg,_layers,_totalLayers,_shine);		
				});
	        })(thisImg,layers,totalLayerElems,shineHTML);
	    }
	}

	function processMovement(e, touchEnabled, elem, layers, totalLayers, shine){

		var bdst = bd.scrollTop || htm.scrollTop,
			bdsl = bd.scrollLeft,
			pageX = (touchEnabled)? e.touches[0].pageX : e.pageX,
			pageY = (touchEnabled)? e.touches[0].pageY : e.pageY,
			offsets = elem.getBoundingClientRect(),
			w = elem.clientWidth || elem.offsetWidth || elem.scrollWidth,
			h = elem.clientHeight || elem.offsetHeight || elem.scrollHeight,
			wMultiple = 320/w,
			offsetX = 0.52 - (pageX - offsets.left - bdsl)/w,
			offsetY = 0.52 - (pageY - offsets.top - bdst)/h,
			dy = (pageY - offsets.top - bdst) - h / 2,
			dx = (pageX - offsets.left - bdsl) - w / 2,
			yRotate = (offsetX - dx)*(0.07 * wMultiple),
			xRotate = (dy - offsetY)*(0.1 * wMultiple),
			imgCSS = 'rotateX(' + xRotate + 'deg) rotateY(' + yRotate + 'deg)',
			arad = Math.atan2(dy, dx),
			angle = arad * 180 / Math.PI - 90;

		if (angle < 0) {
			angle = angle + 360;
		}

		if(elem.firstChild.className.indexOf(' over') != -1){
			imgCSS += ' scale3d(1.07,1.07,1.07)';
		}
		elem.firstChild.style.transform = imgCSS;
		
		shine.style.background = 'linear-gradient(' + angle + 'deg, rgba(255,255,255,' + (pageY - offsets.top - bdst)/h * 0.4 + ') 0%,rgba(255,255,255,0) 80%)';
		shine.style.transform = 'translateX(' + (offsetX * totalLayers) - 0.1 + 'px) translateY(' + (offsetY * totalLayers) - 0.1 + 'px)';	

		var revNum = totalLayers;
		for(var ly=0;ly<totalLayers;ly++){
			layers[ly].style.transform = 'translateX(' + (offsetX * revNum) * ((ly * 2.5) / wMultiple) + 'px) translateY(' + (offsetY * totalLayers) * ((ly * 2.5) / wMultiple) + 'px)';
			revNum--;
		}
	}

	function processEnter(e, elem){
		elem.firstChild.className += ' over';
	}

	function processExit(e, elem, layers, totalLayers, shine){

		var container = elem.firstChild;

		container.className = container.className.replace(' over','');
		container.style.transform = '';
		shine.style.cssText = '';
		
		for(var ly=0;ly<totalLayers;ly++){
			layers[ly].style.transform = '';
		}

	}

}

atvImg();
// Id card effect end