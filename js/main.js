document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("nav-toggle");
  const navList = document.querySelector("#nav-menu");
  toggle.addEventListener("click", () => {
    navList.classList.toggle("show");
  });
});
