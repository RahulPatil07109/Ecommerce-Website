// Nav bar part
let navbar = document.getElementById("header");

let lastScrollTop = 0;

window.addEventListener("scroll", () => {
  let currScrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (currScrollTop > lastScrollTop) {
    navbar.style.top = "-85.5px";
  } else {
    navbar.style.top = "0";
  }
  lastScrollTop = currScrollTop;
});
