window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navigation_ID");
var ok = document.getElementById("ok");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
    ok.classList.add("lowered");
    ok.classList.remove("top_fixed");
  }
  else {
    navbar.classList.remove("sticky");
    ok.classList.remove("lowered");
    ok.classList.add("top_fixed");
  }
}
