// Sticky navbar
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navigation_ID");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  }
  else {
    navbar.classList.remove("sticky");
  }
}

// Pin footer div to the bottom of the page when content is shorter than the viewport height
var footer = document.getElementById("footer");
var stickyBottom = window.innerHeight - footer.offsetTop;

window.onload = function() {myFooter()};

function myFooter() {
  if (stickyBottom > 0) {
    footer.classList.add("stickyBottom");
  }
  else {
    footer.classList.remove("stickyBottom");
  }
}
