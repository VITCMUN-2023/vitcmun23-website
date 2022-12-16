//Navbar JS



window.addEventListener("scroll", function () {
    var header = document.querySelector("#nav");
    header.classList.toggle('sticky', window.scrollY > 0);
});

window.addEventListener("scroll", function () {
    var header = document.querySelector("#nav ul li a:hover");
    header.classList.toggle('sticky', window.scrollY > 0);
});

