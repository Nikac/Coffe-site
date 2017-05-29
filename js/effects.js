/**
 * Created by Nikola on 29.1.2016..
 */

//preloader
$(window).load(function(){ // makes sure the whole site is loaded
        $('#preloader').delay(3000).animate({
            left: '-100%',
        }, 1000);
         $('.preloaderH').animate({
             bottom: '60%',
         }, 1000);
})

$(window).load(function() {

        $('.first').animate({
            opacity: 1,
            "left": "44%",
        }, 3000);

        $('.second').animate({
            opacity: 1,
            "right": "45%"
        }, 1000);

        $('.third').animate({
            opacity: 1,
            "top": "46%"
        }, 2000);
    });


// parallax effects on scroll
$(window).scroll(function() {
   var wScroll= $(this).scrollTop();

        $('.bean').css({
            'transform': 'translate(0px,' + wScroll / 6 + '%)'
        });

        $('.bean1').css({
            'transform': 'translate(0px, -' + wScroll / 3 + '%)'
        });

        $('.bean2').css({
            'transform': 'translate(0px,' + wScroll / 2 + '%)'
        });

        $('.bean3').css({
            'transform': 'translate(0px,' + wScroll / 1.8 + '%)'
        });

        $('.sugar').css({
            'transform': 'translate(0px,' + wScroll / 7 + '%)'
        });

        $('.sugar2').css({
            'transform': 'translate(0px,' + wScroll / 3 + '%)'
        });

        $('.milk-splash').css({
            'transform': 'translate(0px, -' + wScroll / 10 + '%)'
        });



    if(wScroll > $('.row').offset().top - ($(window).height() / 1.4)) {
        $('.row').each(function(i) {

            setTimeout(function() {
                $('.sideRightIn').eq(i).addClass('is-showing');
            }, 150 * (i +1));

        });
    };



});