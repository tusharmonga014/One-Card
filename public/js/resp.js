burger = document.querySelector(".hamburger");
navbar = document.querySelector(".navbar");
rightNav = document.querySelector(".rightnav");
navList = document.querySelector(".navlist");

burger.addEventListener("click", () => {
  navList.classList.toggle("vclass-resp");
  rightNav.classList.toggle("vclass-resp");
  navbar.classList.toggle("h-nav-resp");
});
