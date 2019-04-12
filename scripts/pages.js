
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
    console.log("open");
    modal = document.getElementById(c);
    images = modal.getElementsByClassName("modal-crop");
    i = 0;
    //change display
    modal.classList.add("modal-show");
    //add transition
    modal.classList.add("fade");
    filter.classList.add("fade");
    
    widthChange(w);
    if (w.matches) {
        setTimeout(function() {
            console.log("grow");
            modal.classList.add("modal-opacity");
            modal.classList.remove("modal-shrink");
            filter.style.opacity = ".2";
            filter.style.zIndex = "2";
        }, 10);
    }
    else {
        modal.classList.remove("modal-shrink");
        modal.classList.add("modal-opacity");
        modal.classList.add("modal-swipe");
        setTimeout(function() {
            console.log("swipe");
            modal.classList.remove("modal-swipe");
            filter.style.opacity = ".2";
            filter.style.zIndex = "2";
        }, 0);
    }
    
   
    
    images[0].style.display = "block";
    close = modal.getElementsByClassName("close")[0];
    body.style.overflow = "hidden";   
}

// When the user clicks on <span> (x), close the modal
function close_modal(c) {
    console.log("close");
    widthChange(w);
    modal = document.getElementById(c);
    modal.classList.remove("modal-show");
    modal.classList.remove("fade");
    modal.classList.remove("modal-opacity");
    if (w.matches) {
        modal.classList.add("modal-shrink");
    }
    else {
        modal.classList.add("modal-swipe");
    }
    
    
    filter.style.zIndex = "-1";
    filter.classList.remove("fade");
    filter.style.opacity = "0";
    
    
    images[0].style.display = "none";
    body.style.overflow = "auto";   
}

var body = document.getElementById("body");
// When the user clicks anywhere outside of the modal, close it
filter.onclick = function(event) {
    
var modals = document.getElementsByClassName("modal-container");
    close_modal(modal.getAttribute("id"));
}

function img_right() {
    images[i].style.display = "none";
    if ((i + 1) == images.length) i = 0;
    else {
        ++i
    }
    images[i].style.display = "inline-block";
}

function img_left() {
    images[i].style.display = "none";
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
    console.log("width change");
    //mobile to wide
    if (w.matches) {
        for (var k = 0; k < all_modals.length; ++k) {
            
            //hide inactive modals and reset animation
            if (all_modals[k] != modal) {
                all_modals[k].classList.add("modal-shrink");    
                all_modals[k].classList.remove("modal-swipe");  
            }
            else {
                modal.classList.remove("modal-swipe");   
            }
        }
        //change to gallery
        for (var k = 0; k < images.length; ++k) {
            images[k].style.display = "inline-block";
        }
    }
    //wide to mobile
    else {
        for (var k = 0; k < all_modals.length; ++k) {
            if (all_modals[k].id != modal.id) {
                all_modals[k].classList.remove("modal-shrink"); 
                all_modals[k].classList.add("modal-swipe"); 
            }
        }
        //change images to carousel
        for (var k = 1; k < images.length; ++k) {
            images[k].style.display = "none";
        }
    }
}
