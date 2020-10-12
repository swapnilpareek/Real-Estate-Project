$(document).ready(function () {


    $('.banner_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        arrows: true,
        dots: false,
        fade: false
    });

    $('.features_list_slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        speed: 2000,
        autoplay: false,
        autoplaySpeed: 1000,
        arrows: false,
        dots: false,
        fade: false,
        responsive: [
            {
                breakpoint: 1700,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    autoplay: true,
                    autoplaySpeed: 3000,
                }
            }
        ]
    });

    $('.amnt_slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        autoplay: false,
        arrows: true,
        dots: false,
        fade: false,
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.slidefloorplan').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        autoplay: false,
        arrows: true,
        dots: false,
        fade: false,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    // PRODUCT SLIDER :: START //
    $('.all_amenities_slider').slick({
        dots: false,
        arrows: true,
        infinite: true,
        autoplay: false,
        autoplaySpeed: 4000,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 4000,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });


    $('.tab_cont0').slick({
        dots: false,
        arrows: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 441,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });


    $('.filter_btn1').click(function () {
        $('.siderBarform').toggleClass('show-side-form');
    });

    $('.filter_btn2').click(function () {
        $('.siderBarform2').toggleClass('show-side-form2');
    });

    $('.filter_btn1').click(function () {
        $(this).toggleClass('open');
        $('.left_filter_sec').toggleClass('show-filter');
        $('.menu-overly-filter').toggle();
    });


});

$(document).ready(function () {
    $('.togglemenu').click(function () {
        $(this).toggleClass('open');
        $('.middle_menu').toggleClass('showmenu');
    });
});

$(document).ready(function () {
    $('.section').click(function () {
        $('.togglemenu').removeClass('open');
        $('.middle_menu').removeClass('showmenu');
    });
});


$(document).ready(function () {
    $('div#header .main_menu ul li a').click(function () {
        $('.togglemenu').removeClass('open');
        $('.middle_menu').removeClass('showmenu');
    });
});


if ($(window).width() < 800) {

    $('.ps-timeline').slick({
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 3,
                    arrows: true,
                    slidesToScroll: 1
                }
            },
        ]
    });
}

if ($(window).width() < 600) {

    $('.des2_list').slick({
        dots: false,
        arrows: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
        ]
    });

    $('ul.list-circle').slick({
        dots: false,
        arrows: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 2,
        slidesToScroll: 2,
    });

}

if ($(window).width() < 1100) {
    $(document).ready(function () {
        $('.gallery-tabs li').click(function () {
            $('.gallery-tabs li').removeClass('active');
            $(this).addClass('active');
        });
    });
}



