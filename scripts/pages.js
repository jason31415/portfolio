
// Get the <span> element that closes the modal
var close;
var modal;
var all_modals = document.getElementsByClassName("modal-container");
var images;
var i = 0
var filter = document.getElementById("modal-filter");
var body = document.getElementById("body");
// When the user clicks on the button, open the modal 
function open_modal(c) {
     modal = document.getElementById(c);
    images = modal.getElementsByClassName("modal-crop");
    i = 0;
    
    if (w.matches) {
        modal.style.transform = "scale(1)";
    }
    else {
        modal.style.transform = "translateX(0)";
    }
    modal.style.zIndex = "3";   
    modal.classList.add("fade");
    
    modal.style.opacity = "1";
    filter.classList.add("fade");
    filter.style.opacity = ".2";
    filter.style.zIndex = "2";
    
    images[0].style.display = "block";
    close = modal.getElementsByClassName("close")[0];
    body.style.overflow = "hidden";   
}

// When the user clicks on <span> (x), close the modal
function close_modal(c) {
    modal = document.getElementById(c);
    modal.style.zIndex = "-1";
    modal.classList.remove("fade");
    if (w.matches) {
        modal.style.transform = "scale(0.75)";
    }
    else {
        modal.style.transform = "translateX(-100vw)";
    }
    modal.style.opacity = "0";
    filter.style.zIndex = "-1";
    filter.classList.remove("fade");
    filter.style.opacity = "0";
    
    for (i = 0; i != images.length; ++i) {
        images[i].style.display = "none";
    }
    body.style.overflow = "auto";   
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
    console.log("yowassup");
    if (w.matches) {
        for (var k = 0; k < all_modals.length; ++k) {
            console.log("heyyy");
            all_modals[k].style.transform = "translateX(0)";
            
            if (all_modals[k] != modal) {
                all_modals[k].style.transform = "scale(0.75)";
            }
        }
        for (var k = 0; k < images.length; ++k) {
            images[k].style.display = "inline-block";
        }
    }
    else {
        //console.log(w);
        for (var k = 0; k < all_modals.length; ++k) {
            console.log("eema");
            all_modals[k].style.transform = "scale(1)";
            if (all_modals[k] != modal) {
                all_modals[k].style.transform = "translateX(-100vw)";
            }
        }
        for (var k = 1; k < images.length; ++k) {
            images[k].style.display = "none";
        }
    }
}