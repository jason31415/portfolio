var image_page = document.getElementById("menu-images");
var about_page = document.getElementById("menu-about");
about_page.style.display = "none";
var work = document.getElementById("opt-work");
var about = document.getElementById("opt-about");
var arrow = document.getElementById("right-arrow");
var background = document.getElementById("particles-js");
function image_open() {
    background.classList.remove("back-blur");
    arrow.style.transform = "translateX(-270px)";
    image_page.style.display = "grid";
    about_page.style.display = "none";
    about.classList.remove("active");
    work.classList.add("active");
}

function image_close() {
    arrow.style.transform = "translateX(-140px)";
    background.classList.add("back-blur");
    image_page.style.display = "none";
    about_page.style.display = "grid";
    work.classList.remove("active");
    about.classList.add("active");
    //close all modals when about
    /*
    var modal_container = document.getElementsByClassName("modal-container");
    for (var i = 0; i < modal_container.length; ++i) {
        close(modal_container[i]);
    }
    */
}
