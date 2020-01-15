var prev_thumbnail_page = "page2";
filterSelection("page1");
//set default to page1


function filterSelection(c) {
    
    // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
    let curr_thumbnails = document.getElementById(c);
    
    //if prev page is the same
    if (c === prev_thumbnail_page) {
        //do nothing
    }
    
    else {
        let thumbnails = curr_thumbnails.getElementsByClassName("proj-entry");
        console.log(c);
        curr_thumbnails.classList.add("page_show");
        for (let h = 0; h < thumbnails.length; ++h) {
            delaySwipeIn(h, thumbnails[h]);
        }
        
        console.log(prev_thumbnail_page);
        prev_thumbnails_cont = document.getElementById(prev_thumbnail_page);
        console.log(prev_thumbnails_cont);
        prev_thumbnails = prev_thumbnails_cont.getElementsByClassName("proj-entry");
        
        for (h = 0; h < prev_thumbnails.length; ++h) {
            delaySwipeOut(h, prev_thumbnails[h], prev_thumbnails.length);
        }
        console.log(prev_thumbnails.length);
        prev_thumbnails_cont.classList.remove("page_show"); 
        
        prev_thumbnail_page = c;
        console.log(prev_thumbnail_page);
    }

      //w3AddClass(x[i], "page_show");
}

function delaySwipeIn(i, thumbnail) {
    //thumbnail.classList.remove("swipe-out");
    thumbnail.classList.add("show");
    setTimeout(function() {
        thumbnail.classList.add("swipe-in");
    }, (i + 1) * 100);
}
function delaySwipeOut(i, thumbnail, len) {
    setTimeout(function() {
        //thumbnail.classList.add("swipe-out");
        thumbnail.classList.remove("swipe-in");
        
    }, (i + 1) * 75);
    setTimeout(function() {
            thumbnail.classList.remove("show");
    }, (len + 1) * 60);
}

/*
// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1); 
    }
  }
  element.className = arr1.join(" ");
}
*/
// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("cat-menu");
var btns = btnContainer.getElementsByClassName("btn");
console.log(btns[0]);
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = btnContainer.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

//MENU FUNCTIONS

var image_page = document.getElementById("menu-images");
var about_page = document.getElementById("menu-about");
about_page.style.display = "none";
var work = document.getElementById("opt-work");
var about = document.getElementById("opt-about");
var arrow = document.getElementById("right-arrow");
var background = document.getElementById("particles-js");
var categories = document.getElementById("cat-menu");

function catCascade(cascade) {
    for (let i = 0; i < btns.length; ++i) {
        if (cascade == true) {
            btnContainer.style.display = "block";
            catMoveDown(i, btns[i]);
            console.log("CASCADE");
            
        }
        else {
            catMoveUp(i, btns[i]);
            console.log("NO CASCADE");
            setTimeout(function() {
                btnContainer.style.display = "none";
            }, 250);
        }
    }
}

function catMoveUp(i, btn) {
    setTimeout(function() {
        btn.classList.add("cat-hide");
    }, i * 50);
}
function catMoveDown(i, btn) {
    setTimeout(function() {
        btn.classList.remove("cat-hide");
    }, i * 50);
}

function image_open() {
    background.classList.remove("back-blur");
    arrow.style.transform = "translateX(15px)";
    image_page.style.display = "grid";
    about_page.style.display = "none";
    about.classList.remove("active");
    work.classList.add("active");
    catCascade(true);
}

function image_close() {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    arrow.style.transform = "translateX(109px)";
    background.classList.add("back-blur");
    image_page.style.display = "none";
    about_page.style.display = "grid";
    work.classList.remove("active");
    about.classList.add("active");
    //categories.style.display = "none";
    //close all modals when about
    /*
    var modal_container = document.getElementsByClassName("modal-container");
    for (var i = 0; i < modal_container.length; ++i) {
        close(modal_container[i]);
    }
    */
    catCascade(false);
}


