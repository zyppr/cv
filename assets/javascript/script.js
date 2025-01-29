/*------------------------------------- Sticky Header -------------------------------------*/
$(document).ready(function () {
    $(window).scroll(function () {
        var scrollPosition = $(window).scrollTop();
        if (scrollPosition >= 20) {
            $('#top-header, #top-navbar').addClass('fixed');
        } else {
            $('#top-header, #top-navbar').removeClass('fixed');
        }
    });
});

/*------------------------------------- Page Loader -------------------------------------*/
$(document).ready(function () {
    setTimeout(function () {
        $('.page-loader').fadeOut('slow');
    }, 1000);
});

/*------------------------------------- Infinite Marquee -------------------------------------*/
document.querySelectorAll('.logos').forEach(function (logosContainer) {
    const copy = logosContainer.querySelector('.logos-slide').cloneNode(true);
    logosContainer.appendChild(copy);
});

/*------------------------------------- Cursor -------------------------------------*/
document.addEventListener('DOMContentLoaded', function () {
    const circles = document.querySelectorAll('.view-work-circle');

    circles.forEach(circle => {
        const a1 = circle.querySelector('.a1');

        circle.addEventListener('mousemove', function (event) {
            const rect = circle.getBoundingClientRect();
            const x = event.clientX - rect.left - rect.width / 2;
            const y = event.clientY - rect.top - rect.height / 2;

            circle.style.transform = `translate(${x / 10}px, ${y / 10}px)`;
        });

        circle.addEventListener('mouseleave', function () {
            circle.style.transform = 'translate(0, 0)';
        });
    });
});
const isTouchDevice = 'ontouchstart' in window;
const createCursorFollower = () => {
    const $el = document.querySelector('.cursor');
    window.addEventListener('mousemove', (e) => {
        const { target, x, y } = e;
        const isTargetLinkOrBtn = target?.closest('a') || target?.closest('button');
        gsap.to($el, {
            x: x + 3,
            y: y + 3,
            duration: 0.7,
            ease: 'power4',
            opacity: isTargetLinkOrBtn ? 0.6 : 1,
            transform: `scale(${isTargetLinkOrBtn ? 3 : 1})`,
        });
    });
    document.addEventListener('mouseleave', (e) => {
        gsap.to($el, {
            duration: 0.7,
            opacity: 0,
        });
    });
};
if (!isTouchDevice) {
    createCursorFollower();
}

/*-------------------------------------  Section one Img move on cursor -------------------------------------*/
$(document).ready(function () {
    var worked_box = $('#swipeimage');
    var JessicaBiogi_main = $('#JessicaBiogi_main');
    var arrow = $('#arrow');
    var layer = $('#main');

    layer.mousemove(function (e) {
        var ivalueX = (e.pageX * -1 / 60);
        var ivalueY = (e.pageY * -1 / 60);
        var cvalueX = (e.pageX * -1 / 80);
        var cvalueY = (e.pageY * -1 / 90);
        worked_box.css('transform', 'translate3d(' + ivalueX + 'px,' + ivalueY + 'px, 0)');
        JessicaBiogi_main.css('transform', 'translate3d(' + cvalueX + 'px,' + cvalueY + 'px, 0)');
        arrow.css('transform', 'translate3d(' + cvalueX + 'px,' + cvalueY + 'px, 0)');
    });
});

/*------------------------------------- side menu Open Close -------------------------------------*/
$('.menu-toggle').on('click', function () {
    $('.full-menu').toggleClass('full-menu--open');
})

/*-------------------------------------  side menu Open Accordion -------------------------------------*/
$(function () {
    var Accordion = function (el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;

        var links = this.el.find('.link');
        links.on('click', { el: this.el, multiple: this.multiple }, this.dropdown)
    }

    Accordion.prototype.dropdown = function (e) {
        var $el = e.data.el;
        $this = $(this),
            $next = $this.next();

        $next.slideToggle();
        $this.parent().toggleClass('open');

        if (!e.data.multiple) {
            $el.find('.submenu').not($next).slideUp().parent().removeClass('open');
        };
    }
    var accordion = new Accordion($('#accordion-side-menu'), false);
});

/*------------------------------------- Text Animtion -------------------------------------*/
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin);
$(document).ready(function () {
    var st = $(".animation-text");
    if (st.length == 0) return;
    gsap.registerPlugin(SplitText);
    st.each(function (index, el) {
        el.split = new SplitText(el, { type: "lines,words,chars", linesClass: "poort-line" });
        gsap.set(el, { perspective: 600 });
        if ($(el).hasClass("animation-in-right")) {
            gsap.set(el.split.chars, { opacity: 0, x: "100", ease: "Back.easeOut" });
        }
        if ($(el).hasClass("animation-in-left")) {
            gsap.set(el.split.chars, { opacity: 0, x: "-100", ease: "circ.out" });
        }
        if ($(el).hasClass("animation-in-up")) {
            gsap.set(el.split.chars, { opacity: 0, y: "80", ease: "circ.out" });
        }
        if ($(el).hasClass("animation-in-down")) {
            gsap.set(el.split.chars, { opacity: 0, y: "-80", ease: "circ.out" });
        }
        el.anim = gsap.to(el.split.chars, { scrollTrigger: { trigger: el, start: "top 90%" }, x: "0", y: "0", rotateX: "0", scale: 1, opacity: 1, duration: 0.6, stagger: 0.02 });
    });
});

/*------------------------------------- Page Smooth Scrolling -------------------------------------*/
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
ScrollTrigger.normalizeScroll(true);

if (document.getElementById("smooth-page-scroll")) {
    ScrollSmoother.create({
        smooth: 3,
        effects: true,
        smoothTouch: 0.1,
        normalizeScroll: true
    });
}
if (document.getElementById("menu-accordion-col")) {
    ScrollSmoother.create({
        smooth: 3,
        effects: false,
        smoothTouch: 0.1,
        normalizeScroll: false,
    });
}
/*-------------------------------------Specific reveal Function-------------------------------------*/
function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}
window.addEventListener("scroll", reveal);

/*------------------------------------- Whole Page Scrolling Animation -------------------------------------*/
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});
const hiddenElements = document.querySelectorAll('.fade_up, .fade_down, .zoom_in, .zoom_out, .fade_right, .fade_left, .flip_left, .flip_right, .flip_up, .flip_down');
hiddenElements.forEach((el) => observer.observe(el));

/*-------------------------------------  MY EXPERTISE Images -------------------------------------*/
document.addEventListener("DOMContentLoaded", () => {
    const nameLists = document.querySelectorAll('.name-list');

    nameLists.forEach(item => {
        item.addEventListener('mouseover', () => {
            const img = item.querySelector('.expertise-img');
            img.classList.remove('zoom-out');
            img.classList.add('zoom-in');
        });

        item.addEventListener('mouseout', () => {
            const img = item.querySelector('.expertise-img');
            img.classList.remove('zoom-in');
            img.classList.add('zoom-out');
        });
    });
});
/*------------------------------------- Inner image top-buttom scroll js -------------------------------------*/
var image = document.getElementsByClassName('thumbnail');
new simpleParallax(image, {
    delay: 5,
    transition: 'cubic-bezier(0,0,0,1)'
});

var image = document.getElementsByClassName('thumbnail2');
new simpleParallax(image, {
    delay: 5,
    transition: 'cubic-bezier(0,0,0,1)',
    orientation: 'down'
});

/*------------------------------------- Testimmonial slider -------------------------------------*/
var swiper = new Swiper(".home-slider", {
    slidesPerView: 1,
    loop: true,
    speed: 1600,
    autoplay: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
});

/*------------------------------------- Scroll Bottom To Top -------------------------------------*/
var progressPath = document.querySelector('.progress-wrap path');
var pathLength = progressPath.getTotalLength();
progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
progressPath.style.strokeDashoffset = pathLength;
progressPath.getBoundingClientRect();
progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
var updateProgress = function () {
    var scroll = $(window).scrollTop();
    var height = $(document).height() - $(window).height();
    var progress = pathLength - (scroll * pathLength / height);
    progressPath.style.strokeDashoffset = progress;
}
updateProgress();
$(window).scroll(updateProgress);
var offset = 150;
var duration = 550;
jQuery(window).on('scroll', function () {
    if (jQuery(this).scrollTop() > offset) {
        jQuery('.progress-wrap').addClass('active-progress');
    } else {
        jQuery('.progress-wrap').removeClass('active-progress');
    }
});
jQuery('.progress-wrap').on('click', function (event) {
    event.preventDefault();
    jQuery('html, body').animate({
        scrollTop: 0
    }, duration);
    return false;
})

/*------------------------------------- Circel button move -------------------------------------*/
document.addEventListener('DOMContentLoaded', function () {
    const circles = document.querySelectorAll('.view-work-circle');

    circles.forEach(circle => {
        const a1 = circle.querySelector('.a1');

        circle.addEventListener('mousemove', function (event) {
            const rect = circle.getBoundingClientRect();
            const x = event.clientX - rect.left - rect.width / 2;
            const y = event.clientY - rect.top - rect.height / 2;

            circle.style.transform = `translate(${x / 10}px, ${y / 10}px)`;
        });

        circle.addEventListener('mouseleave', function () {
            circle.style.transform = 'translate(0, 0)';
        });
    });
});

/*------------------------------------- About Page slider -------------------------------------*/
var swiper = new Swiper(".about_slider", {
    direction: "horizontal",
    slidesPerView: 5,
    speed: 1000,
    mousewheel: true,
    centeredSlides: true,
    breakpoints: {
        991: {
            slidesPerView: 2,
            centeredSlides: true,
        },
        200: {
            slidesPerView: 1,
            centeredSlides: false,
        },
    },
});

/*------------------------------------- Services Page slider -------------------------------------*/
document.addEventListener('DOMContentLoaded', function () {
    var swiperContainer = document.querySelector('.swiper.services-slider');
    if (swiperContainer) {
        var swiper = new Swiper(swiperContainer, {
            direction: "horizontal",
            slidesPerView: 5,
            speed: 1000,
            mousewheel: true,
            centeredSlides: true,
            breakpoints: {
                991: {
                    slidesPerView: 2,
                    centeredSlides: true,
                },
                200: {
                    slidesPerView: 1,
                    centeredSlides: false,
                },
            },
        });
    }
});

/*------------------------------------- Gallery Fancy Box -------------------------------------*/
$('[data-fancybox="gallery"]').fancybox({
    buttons: [
        "slideShow",
        "thumbs",
        "zoom",
        "fullScreen",
        "share",
        "close"
    ],
    loop: false,
    protect: true
});

/*------------------------------------- Home 2 Page Slider  -------------------------------------*/
$(document).ready(function () {
    var swiper = new Swiper('.home-page2-slider', {
        loop: true,
        parallax: true,
        speed: 1600,
        autoplay: true,
        autoplay: {
            delay: 5000,
        },
        effect: 'fade',
        autoHeight: true,
        speed: 2500,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            clickable: true,
        },
    });
});

/*------------------------------------- Home 3 Page Slider  -------------------------------------*/
const slider = document.querySelector(".slider");
function activate(e) {
    const items = document.querySelectorAll(".item");
    e.target.matches(".next") && slider.append(items[0]);
    e.target.matches(".prev") && slider.prepend(items[items.length - 1]);
}
document.addEventListener("click", activate, false);

/*------------------------------------- About 2 Page Counter  -------------------------------------*/
let counted = 0;
$(window).scroll(function () {
    let oTop = $('.counter').offset()?.top - window.innerHeight;
    if (counted == 0 && $(window).scrollTop() > oTop) {
        $('.count').each(function () {
            let $this = $(this),
                countTo = $this.attr('data-count');
            $({
                countNum: $this.text()
            }).animate({
                countNum: countTo
            },
                {
                    duration: 2000,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function () {
                        $this.text(this.countNum);
                    }

                });
        });
        counted = 1;
    }
});

/*------------------------------------- Home 3 Page box Slider  -------------------------------------*/
var swiper = new Swiper(".aboutSwiper", {
    effect: "cube",
    loop: true,
    speed: 1600,
    autoplay: true,
    grabCursor: true,
    cubeEffect: {
        shadow: false,
        slideShadows: false,
    },
});

/*------------------------------------- Home 4 Page Slider  -------------------------------------*/
$(document).ready(function () {
    var swiper = new Swiper(".swiper-container-h", {
        direction: "horizontal",
        effect: "slide",
        autoplay: {
            delay: 10000,
            disableOnInteraction: false
        },
        parallax: true,
        speed: 1600,
        rtl: true,
        loop: true,
        loopFillGroupWithBlank: !0,

        mousewheel: {
            eventsTarged: ".swiper-slide",
            sensitivity: 1
        },
        keyboard: {
            enabled: true,
            onlyInViewport: true
        },
        scrollbar: {
            el: ".swiper-scrollbar",
            hide: false,
            draggable: true
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            type: "progressbar"
        }
    });
});

/*------------------------------------- Home 5 Page Slider  -------------------------------------*/
var SwiperSliderFour = new Swiper('.home5-slider-swiper', {
    loop: true,
    autoplay: {
        delay: 3000,
    },
    effect: "coverflow",
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2,
        slideShadows: true
    },
    autoHeight: true,
    speed: 2500,
    slidesPerView: 1,
    spaceBetween: 0,
    centeredSlides: true,
    grabCursor: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        clickable: true,
    },
    breakpoints: {
        575: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
        1400: {
            slidesPerView: 4,
        },
    }
});

/*------------------------------------- About Page2 Progress Bar -------------------------------------*/
$(document).ready(function () {
    progress_bar();
});

function progress_bar() {
    var speed = 30;
    var items = $('.progress_bar').find('.progress_bar_item');

    items.each(function () {
        var item = $(this).find('.progress');
        var itemValue = item.data('progress');
        var i = 0;
        var value = $(this);

        var count = setInterval(function () {
            if (i <= itemValue) {
                var iStr = i.toString();
                item.css({
                    'width': iStr + '%'
                });
                value.find('.item_value').html(iStr + '%');
            }
            else {
                clearInterval(count);
            }
            i++;
        }, speed);
    });
}

/*------------------------------------- Progress Bar Section Start-------------------------------------*/
$(function () {
    function isScrolledIntoView($elem) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();
        var elemTop = $elem.offset().top;
        var elemBottom = elemTop + $elem.height();
        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }
    function count($this) {
        var current = parseInt($this.html(), 10);
        if (isScrolledIntoView($this) && !$this.data("isCounting") && current < $this.data('count')) {
            $this.html(++current);
            $this.data("isCounting", true);
            setTimeout(function () {
                $this.data("isCounting", false);
                count($this);
            }, 20);
        }
    }
    $(".c-counter").each(function () {
        $(this).data('count', parseInt($(this).html(), 10));
        $(this).html('0');
        $(this).data("isCounting", false);
    });
    function startCount() {
        $(".c-counter").each(function () {
            count($(this));
        });
    };
    $(window).scroll(function () {
        startCount();
    });
    startCount();
});

/*------------------------------------- Coming Soon coundown  -------------------------------------*/
var Countdown = {
    $el: $('.countdown'),

    countdown_interval: null,
    total_seconds: 0,
    init: function () {
        this.$ = {
            hours: this.$el.find('.bloc-time.hours .figure'),
            minutes: this.$el.find('.bloc-time.min .figure'),
            seconds: this.$el.find('.bloc-time.sec .figure')
        };

        this.values = {
            hours: this.$.hours.parent().attr('data-init-value'),
            minutes: this.$.minutes.parent().attr('data-init-value'),
            seconds: this.$.seconds.parent().attr('data-init-value'),
        };

        this.total_seconds = this.values.hours * 60 * 60 + (this.values.minutes * 60) + this.values.seconds;
        this.count();
    },

    count: function () {
        var that = this,
            $hour_1 = this.$.hours.eq(0),
            $hour_2 = this.$.hours.eq(1),
            $min_1 = this.$.minutes.eq(0),
            $min_2 = this.$.minutes.eq(1),
            $sec_1 = this.$.seconds.eq(0),
            $sec_2 = this.$.seconds.eq(1);
        this.countdown_interval = setInterval(function () {
            if (that.total_seconds > 0) {
                --that.values.seconds;
                if (that.values.minutes >= 0 && that.values.seconds < 0) {
                    that.values.seconds = 59;
                    --that.values.minutes;
                }
                if (that.values.hours >= 0 && that.values.minutes < 0) {

                    that.values.minutes = 59;
                    --that.values.hours;
                }
                that.checkHour(that.values.hours, $hour_1, $hour_2);

                that.checkHour(that.values.minutes, $min_1, $min_2);

                that.checkHour(that.values.seconds, $sec_1, $sec_2);
                --that.total_seconds;
            }
            else {
                clearInterval(that.countdown_interval);
            }
        }, 1000);
    },
    animateFigure: function ($el, value) {
        var that = this,
            $top = $el.find('.top'),
            $bottom = $el.find('.bottom'),
            $back_top = $el.find('.top-back'),
            $back_bottom = $el.find('.bottom-back');
        $back_top.find('span').html(value);
        $back_bottom.find('span').html(value);
        TweenMax.to($top, 0.8, {
            rotationX: '-180deg',
            transformPerspective: 300,
            ease: Quart.easeOut,
            onComplete: function () {
                $top.html(value);
                $bottom.html(value);
                TweenMax.set($top, { rotationX: 0 });
            }
        });

        TweenMax.to($back_top, 0.8, {
            rotationX: 0,
            transformPerspective: 300,
            ease: Quart.easeOut,
            clearProps: 'all'
        });
    },

    checkHour: function (value, $el_1, $el_2) {
        var val_1 = value.toString().charAt(0),
            val_2 = value.toString().charAt(1),
            fig_1_value = $el_1.find('.top').html(),
            fig_2_value = $el_2.find('.top').html();

        if (value >= 10) {

            if (fig_1_value !== val_1) this.animateFigure($el_1, val_1);
            if (fig_2_value !== val_2) this.animateFigure($el_2, val_2);
        }
        else {

            if (fig_1_value !== '0') this.animateFigure($el_1, 0);
            if (fig_2_value !== val_1) this.animateFigure($el_2, val_1);
        }
    }
};
Countdown.init();

/*------------------------------------- Project Page 4 Slider  -------------------------------------*/
new Swiper('.project4swiper', {
    slidesPerView: 'auto',
    initialSlide: 2,
    speed: 1000,
    autoplay: true,
    spaceBetween: 32,
    loop: true,
    centeredSlides: true,
    roundLengths: true,
    mousewheel: true,
    grabCursor: true,
});

/*------------------------------------- Project Page 5 Slider  -------------------------------------*/
var swiper = new Swiper('.pro5-img-slider-main', {
    effect: 'coverflow',
    grabCursor: true,
    autoplay: true,
    mousewheel: true,
    speed: 1600,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflow: {
        rotate: 20,
        stretch: 0,
        depth: 200,
        modifier: 1,
        slideShadows: true,
    },
    loop: true,
});

/*------------------------------------- Single Page Yoube Vimeo sound cloud Video -------------------------------------*/
function playVideo() {
    var cover = document.querySelector('.video-container2 img.cover');
    var playButton = document.querySelector('.video-container2 img.play-button');
    var iframe = document.getElementById('youtube-video');
    cover.style.display = 'none';
    playButton.style.display = 'none';
    iframe.src = "https://www.youtube.com/embed/zgxUh6RYo7Y?si=esFaIi72tM5Y7giE-&autoplay=1";
    iframe.style.display = 'block';
}
function playVideo2() {
    var cover = document.querySelector('.video-container2 img.cover');
    var playButton = document.querySelector('.video-container2 img.play-button');
    var iframe = document.getElementById('youtube-video');
    cover.style.display = 'none';
    playButton.style.display = 'none';
    iframe.src = "https://www.youtube.com/embed/LHmzWIuih20?si=IAvB1oJGXDBJE4h0-&autoplay=1";
    iframe.style.display = 'block';
}

function playVimeoVideo() {
    var cover = document.querySelector('.video-container2 img.cover');
    var playButton = document.querySelector('.video-container2 img.play-button');
    var iframe = document.getElementById('vimeo-video');
    cover.style.display = 'none';
    playButton.style.display = 'none';
    iframe.src = "https://player.vimeo.com/video/76979871?autoplay=1";
    iframe.style.display = 'block';
}

function playSoundCloudMusic() {
    var container = event.currentTarget;
    var cover = container.querySelector('img.cover');
    var playButton = container.querySelector('img.play-button');
    var iframe = container.querySelector('iframe');
    cover.style.display = 'none';
    playButton.style.display = 'none';
    iframe.src = "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/alanwalker/faded-slushii-remix-1?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true";
    iframe.style.display = 'block';
}

/*------------------------------------- Blog Page 2 slider  -------------------------------------*/
var swiper = new Swiper(".blogPage2Slider", {
    autoplay: true,
    loop: true,
    speed: 1500,
    spaceBetween: 30,
    slidesPerView: 'auto',
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});