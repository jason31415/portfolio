
// Get the <span> element that closes the modal
var close;
var modal;
var images;
var i = 0
var filter = document.getElementById("modal-filter");
var body = document.getElementById("body");
// When the user clicks on the button, open the modal 
function open_modal(c) {
     modal = document.getElementById(c);
    images = modal.getElementsByClassName("modal-crop");
    i = 0;
    widthChange(w);
    images[0].style.display = "inline-block";
    modal.style.display = "block";
    close = modal.getElementsByClassName("close")[0];
    //check to see if also .show?
    //modal.style.display = "block";
    body.style.overflow = "hidden";
    filter.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
function close_modal(c) {
    modal = document.getElementById(c);
    widthChange(w);
    images[0].style.display = "inline-block";
    modal.style.display = "none";
    body.style.overflow = "auto";
    filter.style.display = "none";
}

var body = document.getElementById("body");
// When the user clicks anywhere outside of the modal, close it
filter.onclick = function(event) {
    
var modals = document.getElementsByClassName("modal-container");
  for (var i = 0; i < modals.length; ++i) {
      console.log(modals[i].getAttribute("id"));
      close_modal(modals[i].getAttribute("id"));
  }
}

function img_right() {
    images[i].style.display = "none";
    console.log(images.length);
    console.log(i);
    if ((i + 1) == images.length) i = 0;
    else {
        ++i
    }
    images[i].style.display = "inline-block";
}

function img_left() {
    images[i].style.display = "none";
    console.log(images.length);
    console.log(i);
    if ((i - 1) == -1) i = images.length - 1;
    else {
        --i
    }
    images[i].style.display = "inline-block";
}
const w = window.matchMedia("(min-width: 681px)");
if (matchMedia) {
    w.addListener(widthChange);
    widthChange(w);
}


function widthChange(w) {
    
    if (w.matches) {
        for (var k = 0; k < images.length; ++k) {
            images[k].style.display = "inline-block";
        }
    }
    else {
        //console.log(w);
        for (var k = 1; k < images.length; ++k) {
            images[k].style.display = "none";
        }
    }
}