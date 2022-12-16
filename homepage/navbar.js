$(document).ready(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        console.log(scroll);
        if (scroll > 600) {
            $(".navbar").css("background", "white");
            $(".nav-a").css("color", "black");
        }

        else {
            $(".navbar").css("background", "none");
            $(".nav-a").css("color", "white");

        }
    })
})