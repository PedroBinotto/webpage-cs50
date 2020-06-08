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

var footer = document.getElementById("footer");
var stickyBottom = window.innerHeight - footer.offsetTop;

window.onload = function() {myFooter()};
console.log(stickyBottom);

function myFooter() {
  console.log("**");
  if (stickyBottom > 0) {
    console.log("Maior>");
    footer.classList.add("stickyBottom");
  }
  else {
    console.log("Menor<");
    footer.classList.remove("stickyBottom");
  }
}
