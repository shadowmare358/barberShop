var $off = $("main").offset().top;
$("#arrow").on("click", function(){
    $("html,body").animate({
       scrollTop: $off
    },1000)
})
