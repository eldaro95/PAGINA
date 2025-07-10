document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("nav-toggle");
  const navMenu = document.getElementById("nav-menu");

  toggle?.addEventListener("click", () => {
    navMenu.classList.toggle("show");
  });

  const images = document.querySelectorAll("img[data-large]");
  const modal = document.getElementById("image-modal");
  const modalImg = document.getElementById("modal-img");
  const modalClose = document.querySelector(".modal-close");

  images.forEach((img) => {
    img.addEventListener("click", () => {
      modal.style.display = "block";
      modalImg.src = img.dataset.large;
      modalImg.alt = img.alt;
    });
  });

  modalClose?.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});
