$(document).ready(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        console.log(scroll);
        if (scroll > 600) {
            $(".navbar").css("background", "#AC4D9F");
            $(".nav-a").css("color", "black");
        }

        else {
            $(".navbar").css("background", "none");
            $(".nav-a").css("color", "white");

        }
    })
})