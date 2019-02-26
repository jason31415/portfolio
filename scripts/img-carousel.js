var modal = document.getElementById("wobl-modal");
var images = document.getElementsByClassName("images");

function right() {
    console.log(images.length);
    images[1].style.display = "block";
    images[0].style.display = "none";
}