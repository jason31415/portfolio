
// Get the <span> element that closes the modal
var close;
var modal;
var filter = document.getElementById("modal-filter");
var body = document.getElementById("body");
// When the user clicks on the button, open the modal 
function open_modal(c) {
     modal = document.getElementById(c);
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