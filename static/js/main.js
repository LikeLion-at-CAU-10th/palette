$(function(){
    //card click event
    $(".card-wrapper > .card").hover(function(){
        $(".card-wrapper > .card").removeClass("active");
        $(this).addClass("active");
    });
});