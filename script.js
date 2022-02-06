let hamburgerOut = document.getElementById("bar1");
let hamburgerIn = document.getElementById("bar2");
let navbar = document.getElementById("navbar");
let header = document.getElementById("header");
// Nav bar part
let lastScrollTop = 0;

window.addEventListener("scroll", () => {
  let currScrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (currScrollTop > lastScrollTop) {
    header.style.top = "-85.5px";
  } else {
    header.style.top = "0";
  }
  lastScrollTop = currScrollTop;
});

// Nav bar Mobile (Hamburger)

hamburgerOut.addEventListener("click", () => {
  navbar.classList.toggle("active");
});
hamburgerIn.addEventListener("click", () => {
  navbar.classList.toggle("active");
});
