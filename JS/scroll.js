$('.side-nav nav a').click(function(e){
    e.preventDefault();
    var id = $(this).attr('href'),
        targetOffset = $(id).offset().top,
        menuHeight = $('nav-header').innerHeight();

    $('html, body').animate({
        scrollTop: targetOffset - menuHeight
    }, 900);
});