//toggle menu for small screens
function hamburger() {
  var x = document.getElementById("navbar");
  if (x.className === "top-navbar") {
    x.className += " responsive";
  } else {
    x.className = "top-navbar";
  }
}