$(function () {



    $("circle").mouseover(function () {
        console.log("hover");
        $('circle[stroke="#406E91"]').attr("stroke", "#ffffff");
        $('path[stroke="#47789B"]').attr("stroke", "#ffffff");
    });
    $("circle").mouseleave(function () {
        console.log("hover");
        $('circle[stroke="#ffffff"]').attr("stroke", "#406E91");
        $('path[stroke="#ffffff"]').attr("stroke", "#47789B");
    });



    $(".pricesContent").slick({
        prevArrow: "<img class='slick-prev' src='img/angleLeft.svg'>",
        nextArrow: "<img class='slick-next' src='img/angleRight.svg'>",
        centerMode: true,
        infinite: true,
        slidesToShow: 3,
        centerPadding: '0',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    arrows: false,
                    centerMode: false,
                    centerPadding: '0',
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: true,
                    // centerMode: true,
                    // centerPadding: '0',
                    slidesToShow: 1
                }
            }
        ]
    });



    window.addEventListener('scroll', () => {
        
        if ($(window).scrollTop() > 120 || $(window).width() < 768) {
            $('.navigation').addClass('fixedTop');
        } else {
            $('.navigation').removeClass('fixedTop');
        }


        // if ($(window).width() > 768) {
        //     $('.navigation').removeClass('fixedTop');
        // } else {
        //     $('.navigation').addClass('fixedTop');
        // }



    });






    console.log("ready");
});
