const mobileNav = document.querySelector("li");
const menuIcon = document.querySelector(".menu");

menuIcon.addEventListener("click", function () {
  mobileNav.classList.toggle("active");
  menuIcon.classList.toggle("active");
});
