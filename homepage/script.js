window.addEventListener("scroll", function () {
    var header = document.querySelector("#nav");
    header.classList.toggle('sticky', window.scrollY > 0);
});

var more = document.querySelector('.more');
var overlay = document.querySelector('.overlay');
var cancel = document.querySelector('.cancel');
var navbar = document.querySelector('.mobile-nav-ele');

more.addEventListener("click", function () {
    // console.log("clicked");

    overlay.style.display = "block";
    cancel.style.display = "block";
    navbar.style.display = "block";
    more.style.display = "none";

    navbar.addEventListener("click", function () {
        cancel.style.display = "none";
        overlay.style.display = "none";
        navbar.style.display = "none";
        more.style.display = "block";
    })

})

