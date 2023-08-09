$(document).ready(function(){

    $('#menu').click(function(){
    $(this).toggleClass('fa-times');
$('header').toggleClass('toggle');
});

$(window).on('scroll load',function(){

    $('#menu').removeClass('fa-times');
    $('header').removeClass('toggle');
    
    if($(window).scrollTop() > 0){
        $('.top').show();
    }else{
        $('.top').hide();
    }

});


// smooth scrolling

$('a[href*="#"]').click(function(e){

    e.preventDefault();

    $('html, body').animate({

        scrollTop : $($(this).attr('href')).offset().top,

    },
    500,
    'linear'
    );

});


});

activeslideimg();

function activeslideimg(activeSlide = 2) {
    const slides = document.querySelectorAll(".slide");

    slides[activeSlide].classList.add("active");

    for (const slide of slides) {
        slide.addEventListener("click", () => {
            clearActiveClasses();

            slide.classList.add("active");
        });
    }


    function clearActiveClasses() {
        slides.forEach((slide) => {
            slide.classList.remove("active");
        })
    }


}