$(document).ready(function() {

//scroll up
    $(window).scroll(function() {
        // Высота проявления кнопки
        if ($(this).scrollTop() > 100) {
            $('.go-to-top').fadeIn();
        } else {
            $('.go-to-top').fadeOut();
        }
    });
    
    $('.go-to-top').click(function() {
        $('body,html').animate({
            scrollTop: 0
        // Скорость подъема
        }, 1000);
        return false;
    });

    $('.go-to-down').click(function() {
        $('body,html').animate({
            scrollTop: 550
        
        }, 1000);
        return false;
    });


//Mixit UP
    $(function(){
        $("#Container").mixItUp({

        });
    });

});