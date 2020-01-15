
// Get the <span> element that closes the modal
var close;
var curr_modal_header_gal;
var i = 0;
var filter = document.getElementById("modal-filter");
var curr_modal;
var intro;
var sct;

/*
var temp = document.getElementsByClassName("crop");

for (var k = 0; k != temp.length; ++k) {
    var temp = document.getElementsByClassName("crop");
    temp[k].addEventListener('click', function () {
        this.classList.add('animate');
        alert("expand");
    });
}
*/

function sct_back() {
    close_modal(curr_modal.getAttribute('id'));
}

function updateSection(modal_name) {
    //change section links
    var introbtn = document.getElementById("intro-btn");
    var processbtn = document.getElementById("process-btn");
    var finalbtn = document.getElementById("final-btn");
    
    if (modal_name == "none") {
        introbtn.href = "#intro-";
        processbtn.href = "#process-";
        finalbtn.href = "#final-";
    }
    else {
        introbtn.href += modal_name;
        processbtn.href += modal_name;
        finalbtn.href += modal_name;
    }
}

// When the user clicks on the button, open the modal 
function open_modal(c) {
    
    //shrink menu bar
    var name = document.getElementById("name");
    setTimeout(()=> {
        name.innerHTML = "JP";
    }, 450);
    
    //hide menu opts
    var menu = document.getElementsByClassName("menu-opts")[0]
    menu.classList.add("menu-hide");
    setTimeout(function() {menu.style.display= "none"}, 500);
    
    //set section names
    //updateSection(c);
    // get modal name
    var sct_name = (c.split('-'))[0];
    sct_name += "-sct";
    sct = document.getElementById(sct_name);
    
    
    
    //show section btns
    setTimeout(()=> {
        sct.style.display = "block";
    }, 400);
    setTimeout(()=> {
        sct.classList.add("sections-show");
    }, 600);
    
    //hide cat menu
    catCascade(false);
    
    //hide background
    //document.getElementById("backcover").classList.remove("backcover_fade");
    
    cancelRequestAnimFrame(pJSDom[0].pJS.fn.checkAnimFrame);
    cancelRequestAnimFrame(pJSDom[0].pJS.fn.drawAnimFrame);
    pJSDom[0].pJS.fn.particlesEmpty();
    pJSDom[0].pJS.fn.canvasClear();
    
    
    console.log("open");
    curr_modal = document.getElementById(c);
    intro = curr_modal.getElementsByClassName("intro")[0];
    
    //get images for the gallery, !!! needs revision
    //images = modal.getElementsByClassName("modal-crop");
    //i = 0;
    
    //change display
    curr_modal.classList.add("modal-show");
    //add transition
    curr_modal.classList.add("fade");
    filter.classList.add("fade");
    
    widthChange(w,);
    
    //if desktop
    if (w.matches) {
        setTimeout(function() {
            console.log("grow");
            curr_modal.classList.add("modal-opacity");
            curr_modal.classList.remove("modal-shrink");
            filter.style.opacity = ".2";
            filter.style.zIndex = "2";
            
        }, 10);
        setTimeout(function() {
            intro.classList.add("intro-expand-width");
            setTimeout(function() {
                intro.classList.add("intro-expand-height");
            }, 500);
        }, 100);
    }
    //if mobile
    else {
        curr_modal.classList.remove("modal-shrink");
        curr_modal.classList.add("modal-opacity");
        curr_modal.classList.add("modal-swipe");
        setTimeout(function() {
            console.log("swipe");
            curr_modal.classList.remove("modal-swipe");
            filter.style.opacity = ".2";
            filter.style.zIndex = "2";
        }, 0);
        setTimeout(function() {
            intro.classList.add("intro-expand-width");
            setTimeout(function() {
            intro.classList.add("intro-expand-height");
        }, 500);
        }, 250);
    }
    
    //images[0].style.display = "block";
    close = curr_modal.getElementsByClassName("close")[0];
    document.body.style.overflow = "hidden";   
}

// When the user clicks on <span> (x), close the modal
function close_modal(c) {
    //grow menu bar
    var name = document.getElementById("name");
    name.innerHTML = "JasonPi";
    
    //show menu opts
    var menu = document.getElementsByClassName("menu-opts")[0]
    menu.style.display = "block";
    setTimeout(function() {menu.classList.remove("menu-hide")}, 100);
    
    
    //reset section names
    //updateSection('none');
    
    //hide menu sections
    sct.style.display = "none";
    sct.classList.remove("sections-show");
    
    
    catCascade(true);
    intro.classList.remove("intro-expand-height");
    intro.classList.remove("intro-expand-width");
    console.log("close");
    
    //show background
    //document.getElementById("backcover").classList.add("backcover_fade");
    pJSDom[0].pJS.fn.vendors.start();
    
    //detect screen change
    widthChange(w);
    
    curr_modal = document.getElementById(c);
    curr_modal.classList.remove("modal-show");
    curr_modal.classList.remove("fade");
    curr_modal.classList.remove("modal-opacity");
    
    //if desktop
    if (w.matches) {
        curr_modal.classList.add("modal-shrink");
    }
    //if mobile
    else {
        curr_modal.classList.add("modal-swipe");
    }
    
    filter.style.zIndex = "-1";
    filter.classList.remove("fade");
    filter.style.opacity = "0";
    
    
    //images[0].style.display = "none";
    document.body.style.overflow = "scroll";   
    
}

// When the user clicks anywhere outside of the modal, close it
filter.onclick = function(event) {    
    var modals = document.getElementsByClassName("modal-container");
    close_modal(curr_modal.getAttribute("id"));
}

function img_right() {
    curr_modal_header_gal[i].style.display = "none";
    if ((i + 1) == curr_modal_header_gal.length) i = 0;
    else {
        ++i
    }
    curr_modal_header_gal[i].style.display = "inline-block";
}

function img_left() {
    curr_modal_header_gal[i].style.display = "none";
    if ((i - 1) == -1) i = curr_modal_header_gal.length - 1;
    else {
        --i
    }
    curr_modal_header_gal[i].style.display = "inline-block";
}
const w = window.matchMedia("(min-width: 681px)");

if (matchMedia) {
    w.addListener(widthChange);
    widthChange(w);
}


function widthChange(w) {
    console.log("width change");
    var modals = document.getElementsByClassName("modal-container");
    //mobile to wide
    if (w.matches) {
        for (var k = 0; k < modals.length; ++k) {
            
            //hide inactive modals and reset animation
            if (modals[k] != curr_modal) {
                modals[k].classList.add("modal-shrink");    
                modals[k].classList.remove("modal-swipe");  
            }
            else {
                curr_modal.classList.remove("modal-swipe");   
            }
        }
        //change to gallery
        //for (var k = 0; k < images.length; ++k) {
        //    images[k].style.display = "inline-block";
        //}
    }
    //wide to mobile
    else {
        for (var k = 0; k < modals.length; ++k) {
            if (modals[k].id != curr_modal.id) {
                modals[k].classList.remove("modal-shrink"); 
                modals[k].classList.add("modal-swipe"); 
            }
        }
        //change images to carousel
        //for (var k = 1; k < images.length; ++k) {
        //    images[k].style.display = "none";
        //}
    }
}



//gallery functions

var prev_gal_ind = 0;
var gal = document.getElementById('gal-modal');
var gal_img;
var curr_gal;
var display_img = document.getElementById('gal-img');

//add event listeners to all modal-image
var all_images = document.getElementsByClassName("modal-image");

for (var i = 0; i != all_images.length; ++i) {
    
    //opens gal modal and changes image
    all_images[i].addEventListener('click', function() {
        //update images from chosen modal
        gal_img = curr_modal.getElementsByClassName("modal-image");
        //find ind of image
        for (var k = 0; k != gal_img.length; ++k) {
            if (this == gal_img[k]) prev_gal_ind = k;
        }
        
        display_img.src = this.src;
        gal.style.display = "block";
        
        display_img_count();
        
    });
}


function gal_close() {
    //gal_img[prev_gal_ind].style.display = "none";
    prev_gal_ind = 0;
    gal.style.display = "none";
    
}

function gal_left() {
    console.log("left");
    
    //if already at end of gal, loop
    if (prev_gal_ind == 0) {
        display_img.src = gal_img[gal_img.length - 1].src;
        prev_gal_ind = gal_img.length - 1;
    }
    else {
        display_img.src = gal_img[--prev_gal_ind].src;
    }
    display_img_count();
}

function gal_right() {
    console.log("right");
    
    //if already at end of gal, loop
    if (prev_gal_ind == (gal_img.length - 1)) {
        display_img.src = gal_img[0].src;
        prev_gal_ind = 0;
    }
    else {
        display_img.src = gal_img[++prev_gal_ind].src;
    }
    display_img_count();
}

function display_img_count(){
    document.getElementById("img-count").innerHTML = (+prev_gal_ind + 1).toString() + "/" + gal_img.length.toString();
}

//detect arrow press on gallery
document.onkeydown = function(event) {
    switch(event.keyCode) {
        case 37:
            gal_left();
            break;
        case 39:
            gal_right();
            break;
        case 27:
            gal_close();
            break;
    }
}